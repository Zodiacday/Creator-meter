import { ReactNode } from "react";

interface CategorySectionProps {
  title: string;
  icon: ReactNode;
  color: string;
  children: ReactNode;
}

export const CategorySection = ({ title, icon, color, children }: CategorySectionProps) => {
  return (
    <section className="mb-16 animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <div 
          className="p-3 rounded-xl"
          style={{ backgroundColor: `${color}20` }}
        >
          <div style={{ color }}>
            {icon}
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold">{title}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {children}
      </div>
    </section>
  );
};
