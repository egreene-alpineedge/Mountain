import React, { useRef, useState, useEffect, type ReactNode } from "react";

interface ResizableDivProps {
    children: ReactNode;
    className: string;
    leftAdjustable?: boolean;
    rightAdjustable?: boolean;
}

const ResizableDiv = ({
    children,
    className,
    leftAdjustable,
    rightAdjustable = true,
}: ResizableDivProps) => {
    const containerRef = useRef(null);
    const [isResizing, setIsResizing] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isResizing || !containerRef.current) return;

            if (leftAdjustable && !rightAdjustable) {
                const newWidth =
                    e.clientX -
                    containerRef.current.getBoundingClientRect().right;
                containerRef.current.style.width = `${-1 * newWidth}px`;
            } else {
                const newWidth =
                    e.clientX -
                    containerRef.current.getBoundingClientRect().left;
                containerRef.current.style.width = `${newWidth}px`;
            }
        };

        const handleMouseUp = () => {
            setIsResizing(false);
            document.body.style.cursor = "default";
        };

        if (isResizing) {
            document.addEventListener("mousemove", handleMouseMove);
            document.addEventListener("mouseup", handleMouseUp);
            document.body.style.cursor = "ew-resize";
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isResizing]);

    return (
        <div
            ref={containerRef}
            className={className}
            style={{
                pointerEvents: "auto",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "100%",
                userSelect: isResizing ? "none" : "auto",
            }}
        >
            {leftAdjustable && (
                <div
                    onMouseDown={() => setIsResizing(true)}
                    style={{
                        height: "100%",
                        width: "5px",
                        cursor: "ew-resize",
                        background: "#fff",
                    }}
                />
            )}

            {children}
            {rightAdjustable && (
                <div
                    onMouseDown={() => setIsResizing(true)}
                    style={{
                        height: "100%",
                        width: "5px",
                        cursor: "ew-resize",
                        background: "#fff",
                    }}
                />
            )}
        </div>
    );
};

export default ResizableDiv;
