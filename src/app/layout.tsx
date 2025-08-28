import "./globals.css";
import Navbar from "@/components/Navbar";
import ButtonsDemo from "@/components/ButtonsDemo";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

export const metadata = {
  title: "CRUD App",
  description: "Reusable CRUD with Next.js, Tailwind, Prisma",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/* h-screen locks the layout to viewport height, overflow-hidden stops body scrolling */}
      <body className="flex flex-col h-screen overflow-hidden">
        {/* Navbar row (does not scroll) */}
        <div className="shrink-0">
          <Navbar />
        </div>

        {/* Content row: sidebar (fixed in place) + main (scrolls) */}
        <div className="flex flex-1 min-h-0">
          <Sidebar>
            {/* your sidebar menu, links, etc. */}
            <div className="p-4">Sidebar Menu</div>
          </Sidebar>

          {/* Only this area scrolls */}
          <main className="flex-1 overflow-y-auto bg-bg p-6 text-text">
            <ButtonsDemo />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla id tempora adipisci veritatis earum officiis, veniam aliquid quibusdam temporibus amet quasi saepe eligendi error, explicabo impedit harum quo delectus tempore, voluptatem magni aliquam ipsa nihil odit. Assumenda aut optio voluptates fugit repellendus error maiores sapiente doloremque harum natus, odio fugiat veniam enim quo minima tenetur distinctio non pariatur at quisquam nihil cupiditate sunt a. Cumque iusto vel totam. Vitae non deleniti et totam voluptatem, dolores sit vero maiores amet saepe minus doloribus excepturi minima unde necessitatibus mollitia reprehenderit. Obcaecati repellendus necessitatibus fugit laborum nesciunt perferendis soluta iure, error fugiat ad nihil neque esse commodi ullam minus cum quod eum. Magnam soluta earum fugit molestiae, officia molestias cum minus fugiat, provident incidunt animi obcaecati optio, ullam repellat nesciunt dolor omnis aliquam error iure nemo cupiditate eveniet adipisci eos! Tempora, a dolore. Itaque distinctio nesciunt fuga ea corrupti facilis deleniti tenetur quis repudiandae? Expedita, mollitia. Praesentium eum minus neque! Nisi necessitatibus ab, voluptatum voluptates soluta ea sed laboriosam excepturi ratione accusantium fugit dolorum obcaecati dolore nobis itaque, voluptatibus aliquam rem molestiae reiciendis eveniet deserunt quos veniam? Dolorum, autem! Commodi, culpa facilis voluptatibus, accusantium accusamus quasi ducimus debitis facere laboriosam ad in excepturi.
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
