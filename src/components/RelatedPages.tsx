"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedPage {
  title: string;
  path: string;
  description: string;
}

interface RelatedPagesProps {
  pages: RelatedPage[];
}

export const RelatedPages = ({ pages }: RelatedPagesProps) => {
  return (
    <section className="mt-12 pt-8 border-t border-border">
      <h2 className="text-2xl font-bold mb-6">Related Statistics</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pages.map((page) => (
          <Link
            key={page.path}
            href={page.path}
            className="group p-4 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-muted-foreground">{page.description}</p>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
