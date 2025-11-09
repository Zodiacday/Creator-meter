import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      slug: "births-per-minute",
      title: "How Many People Are Born Each Minute? The Math Behind Live Counters",
      excerpt: "Discover how we convert annual birth statistics into real-time counters and explore the fascinating mathematics of global population growth.",
      category: "Methodology",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/placeholder.svg",
    },
    {
      slug: "understanding-gdp",
      title: "Understanding Global GDP: What the Numbers Really Mean",
      excerpt: "GDP is often mentioned in news headlines, but what does it actually measure? Learn how to interpret global economic data.",
      category: "Economics",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/placeholder.svg",
    },
    {
      slug: "co2-emissions-explained",
      title: "CO₂ Emissions Explained: Breaking Down the Data",
      excerpt: "Climate change dominates discussions worldwide. Understand how CO₂ emissions are measured and what the numbers mean for our planet.",
      category: "Environment",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/placeholder.svg",
    },
    {
      slug: "population-milestones",
      title: "World Population Milestones: When Will We Reach 9 Billion?",
      excerpt: "Explore historical population growth and discover when experts predict we'll reach the next billion-person milestone.",
      category: "Population",
      date: "2023-12-28",
      readTime: "8 min read",
      image: "/placeholder.svg",
    },
  ];

  const categories = ["All", "Methodology", "Economics", "Environment", "Population", "Health"];

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

          {/* Featured Post */}
          <Card className="mb-12 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto bg-muted" />
              <CardContent className="p-6 md:p-8 flex flex-col justify-center">
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
                  to={`/blog/${blogPosts[0].slug}`}
                  className="text-primary hover:underline font-medium inline-flex items-center gap-2 group"
                >
                  Read Article
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </div>
          </Card>

          {/* Recent Posts */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Recent Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video bg-muted" />
                  <CardHeader>
                    <Badge className="w-fit mb-2">{post.category}</Badge>
                    <CardTitle className="text-lg">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {post.excerpt}
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
                      to={`/blog/${post.slug}`}
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
