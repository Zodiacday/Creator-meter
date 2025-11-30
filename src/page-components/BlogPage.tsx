"use client";

import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const BlogPage = () => {
  const blogPosts = [
    {
      slug: "population-trends-2025",
      title: "2025 Population Trends: What the Numbers Tell Us",
      excerpt: "Deep dive into global population trends in 2025, including aging demographics, urbanization, and regional shifts that will shape our future.",
      category: "Population",
      date: "2025-01-15",
      readTime: "8 min read",
      image: "/logo.svg",
    },
    {
      slug: "climate-data-explained",
      title: "Climate Data Explained: Understanding Environmental Statistics",
      excerpt: "Comprehensive guide to climate data, CO₂ emissions tracking, and environmental indicators. Learn how global climate statistics are measured and verified.",
      category: "Environment",
      date: "2025-01-12",
      readTime: "10 min read",
      image: "/logo.svg",
    },
    {
      slug: "understanding-gdp-growth",
      title: "Understanding GDP Growth: A Complete Guide to Economic Indicators",
      excerpt: "Master the fundamentals of GDP, economic growth metrics, and how to interpret global economic data from World Bank and IMF sources.",
      category: "Economics",
      date: "2025-01-10",
      readTime: "9 min read",
      image: "/logo.svg",
    },
  ];

  const categories = ["All", "Population", "Environment", "Economics"];

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" }
  ];

  return (
    <>
      <MetaTags
        title="Blog | CreatorMeter Insights - Global Statistics & Data Analysis"
        description="Explore articles about global statistics, data methodology, and insights into world trends. Learn how we process and present live data from verified sources."
        keywords="data blog, global statistics, world trends, data analysis, methodology, population insights, environmental data"
        canonical="https://www.creatormeter.com/blog"
      />
      <SchemaMarkup
        type="BreadcrumbList"
        data={breadcrumbs.map((crumb, index) => ({
          name: crumb.label,
          url: `https://www.creatormeter.com${crumb.href}`
        }))}
      />
      
      <div className="min-h-screen bg-background">
        <Navigation />
        <Breadcrumbs items={breadcrumbs} />
        
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              CreatorMeter Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights into global statistics, data methodology, and the stories behind the numbers
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Post (compact, no image) */}
          <Card className="mb-12 overflow-hidden">
            <CardContent className="p-6 md:p-8">
              <Badge className="w-fit mb-3">{blogPosts[0].category}</Badge>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                {blogPosts[0].title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
              <Link
                href={`/blog/${blogPosts[0].slug}`}
                className="text-primary hover:underline font-medium inline-flex items-center gap-2 group"
              >
                Read Article
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </CardContent>
          </Card>

          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Recent Articles</h2>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.slug} className="min-w-[18rem] max-w-xs p-4 hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0 mb-2">
                    <Badge className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.excerpt.length > 140 ? post.excerpt.slice(0, 137) + '...' : post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary hover:underline text-sm font-medium inline-flex items-center gap-1 group"
                    >
                      Read More
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default BlogPage;
