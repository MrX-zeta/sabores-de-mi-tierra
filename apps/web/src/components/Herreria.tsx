import { Voluta } from "./Espiga";

export default function Herreria({ className }: { className?: string }) {
  return (
    <div className={`herreria${className ? ` ${className}` : ""}`} aria-hidden="true">
      <Voluta />
    </div>
  );
}
