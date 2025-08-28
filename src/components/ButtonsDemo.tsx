"use client";

export default function ButtonsDemo() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold text-primary">Buttons Showcase</h2>
      <div className="flex flex-wrap gap-4">
        <button
          className="px-4 py-2 rounded-lg shadow text-white"
          style={{ backgroundColor: "var(--color-primary)" }}
        >
          Primary
        </button>

        <button
          className="px-4 py-2 rounded-lg shadow text-white"
          style={{ backgroundColor: "var(--color-secondary)" }}
        >
          Secondary
        </button>

        <button
          className="px-4 py-2 rounded-lg shadow text-white"
          style={{ backgroundColor: "var(--color-success)" }}
        >
          Success
        </button>

        <button
          className="px-4 py-2 rounded-lg shadow text-white"
          style={{ backgroundColor: "var(--color-danger)" }}
        >
          Danger
        </button>

        <button
          className="px-4 py-2 rounded-lg shadow text-black"
          style={{ backgroundColor: "var(--color-warning)" }}
        >
          Warning
        </button>

        <button
          className="px-4 py-2 rounded-lg shadow text-white"
          style={{ backgroundColor: "var(--color-info)" }}
        >
          Info
        </button>
      </div>
    </div>
  );
}
