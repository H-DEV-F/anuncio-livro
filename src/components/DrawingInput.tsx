import React, { useRef, useState, useEffect } from 'react';

const DrawingInput = ({ onSave }: { onSave: (imageData: string) => void }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('#000000');
    const [brushSize, setBrushSize] = useState(5);
    const [backgroundColor, setBackgroundColor] = useState('#ffffff');
    const [drawingHistory, setDrawingHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState(-1);

    // Inicializa o canvas
    useEffect(() => {
        initCanvas();
    }, [backgroundColor]);

    const initCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;

        // Preenche o canvas com a cor de fundo
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.strokeStyle = color;
        context.lineWidth = brushSize;
        context.lineCap = 'round';
        context.lineJoin = 'round';

        // Salva o estado inicial
        saveDrawingState();
    };

    const saveDrawingState = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const imageData = canvas.toDataURL();

        // Se estamos no meio do histórico, removemos os estados futuros
        if (historyIndex < drawingHistory.length - 1) {
            setDrawingHistory(drawingHistory.slice(0, historyIndex + 1));
        }

        setDrawingHistory([...drawingHistory, imageData]);
        setHistoryIndex(drawingHistory.length);
    };

    const undoDrawing = () => {
        if (historyIndex <= 0) return; // Não há nada para desfazer

        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const img = new Image();

        img.onload = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0);
        };

        img.src = drawingHistory[newIndex];
    };

    const redoDrawing = () => {
        if (historyIndex >= drawingHistory.length - 1) return; // Não há nada para refazer

        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);

        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;

        const img = new Image();

        img.onload = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0);
        };

        img.src = drawingHistory[newIndex];
    };

    const getCoordinates = (e:any): { x: number, y: number } | undefined => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();

        // Verifica se é um evento de touch ou mouse
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;

        return {
            x: clientX - rect.left,
            y: clientY - rect.top
        };
    };

    const startDrawing = (e:any) => {
        e.preventDefault(); // Previne comportamento padrão para touch

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const coords = getCoordinates(e);
        if(!coords) return;

        const { x, y } = coords;

        context.beginPath();
        context.moveTo(x, y);
        setIsDrawing(true);
    };

    const draw = (e:any) => {
        e.preventDefault(); // Previne comportamento padrão para touch

        if (!isDrawing) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        const coords = getCoordinates(e);
        if(!coords) return;

        const { x, y } = coords;

        context.lineTo(x, y);
        context.stroke();
    };

    const stopDrawing = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.closePath();
        setIsDrawing(false);

        // Salva o estado após terminar de desenhar
        saveDrawingState();
    };

    const clearCanvas = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext('2d');
        if (!context) return;

        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);

        // Salva o estado após limpar
        saveDrawingState();
    };

    const saveDrawing = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const imageData = canvas.toDataURL('image/png');
        onSave(imageData);
    };

    return (
        <div className="drawing-input">
            <div className="flex flex-wrap gap-4 justify-between mb-6 text-white text-sm">
                <div className="flex flex-col gap-1 font-color-white">
                    <label>Cor do pincel: </label>
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => {
                            setColor(e.target.value);
                            const canvas = canvasRef.current;
                            if (!canvas) return;

                            const context = canvas.getContext('2d');
                            if (!context) return;

                            context.strokeStyle = e.target.value;
                        }}
                    />
                </div>
                <div className="flex flex-col gap-1 font-color-white">
                    <label>Tamanho do pincel: </label>
                    <input
                        type="range"
                        min="1"
                        max="20"
                        value={brushSize}
                        onChange={(e) => {
                            setBrushSize(parseInt(e.target.value));
                            const canvas = canvasRef.current;
                            if (!canvas) return;

                            const context = canvas.getContext('2d');
                            if (!context) return;

                            context.lineWidth = parseInt(e.target.value);
                        }}
                    />
                    <span>{brushSize}px</span>
                </div>
                <div className="flex flex-col gap-1 font-color-white">
                    <label>Cor de fundo: </label>
                    <input
                        type="color"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                    />
                </div>
            </div>
            <div className="flex flex-wrap gap-4 justify-between mb-6 text-white text-sm">
                <div className="flex flex-col font-color-white">
                    <button
                        onClick={undoDrawing}
                        disabled={historyIndex <= 0}
                    >
                        Desfazer
                    </button>
                </div>
                <div className="flex flex-col font-color-white">
                    <button
                        onClick={redoDrawing}
                        disabled={historyIndex >= drawingHistory.length - 1}
                    >
                        Refazer
                    </button>
                </div>

                <div className="flex flex-col font-color-white">
                    <button className="font-color-white" onClick={clearCanvas}>Limpar</button>
                </div>
                <div className="flex flex-col font-color-white">
                    <button className="font-color-white" onClick={saveDrawing}>Salvar Desenho</button>
                </div>
            </div>

            <canvas
                ref={canvasRef}
                width={500}
                height={300}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                style={{
                    border: '1px solid #000',
                    backgroundColor: backgroundColor,
                    cursor: 'crosshair',
                    touchAction: 'none'
                }}
            />
        </div>
    );
};

export default DrawingInput;