import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MetaTags } from "@/components/SEO/MetaTags";
import { SchemaMarkup } from "@/components/SEO/SchemaMarkup";
import { Code, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const WidgetsPage = () => {
  const { toast } = useToast();
  const [copiedWidget, setCopiedWidget] = useState<string | null>(null);

  const baseUrl = window.location.origin;

  const widgets = [
    {
      id: "world-population",
      title: "World Population Counter",
      description: "Live world population counter with real-time updates",
      embedUrl: `${baseUrl}/widget/world-population`,
      width: 400,
      height: 250,
      preview: `${baseUrl}/widget/world-population`
    },
    {
      id: "world-gdp",
      title: "World GDP Counter",
      description: "Real-time global GDP counter",
      embedUrl: `${baseUrl}/widget/world-gdp`,
      width: 400,
      height: 250,
      preview: `${baseUrl}/widget/world-gdp`
    },
    {
      id: "co2-emissions",
      title: "CO2 Emissions Counter",
      description: "Live CO2 emissions tracking",
      embedUrl: `${baseUrl}/widget/co2-emissions`,
      width: 400,
      height: 250,
      preview: `${baseUrl}/widget/co2-emissions`
    },
    {
      id: "coronavirus",
      title: "Coronavirus Stats",
      description: "Live COVID-19 global statistics",
      embedUrl: `${baseUrl}/widget/coronavirus`,
      width: 400,
      height: 300,
      preview: `${baseUrl}/widget/coronavirus`
    },
    {
      id: "births",
      title: "Global Births Counter",
      description: "Real-time worldwide births this year",
      embedUrl: `${baseUrl}/widget/births`,
      width: 400,
      height: 250,
      preview: `${baseUrl}/widget/births`
    },
    {
      id: "deaths",
      title: "Global Deaths Counter",
      description: "Real-time worldwide deaths this year",
      embedUrl: `${baseUrl}/widget/deaths`,
      width: 400,
      height: 250,
      preview: `${baseUrl}/widget/deaths`
    },
    {
      id: "health-spending",
      title: "Healthcare Spending Counter",
      description: "Live global healthcare spending tracker",
      embedUrl: `${baseUrl}/widget/health-spending`,
      width: 400,
      height: 250,
      preview: `${baseUrl}/widget/health-spending`
    }
  ];

  const generateEmbedCode = (widget: typeof widgets[0], type: 'iframe' | 'script') => {
    if (type === 'iframe') {
      return `<iframe src="${widget.embedUrl}" width="${widget.width}" height="${widget.height}" frameborder="0" scrolling="no" style="border: 1px solid #e5e7eb; border-radius: 8px;"></iframe>`;
    } else {
      return `<script src="${baseUrl}/widget.js" data-widget="${widget.id}" data-width="${widget.width}" data-height="${widget.height}"></script>`;
    }
  };

  const copyToClipboard = (text: string, widgetId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedWidget(widgetId);
    toast({
      title: "Copied!",
      description: "Embed code copied to clipboard",
    });
    setTimeout(() => setCopiedWidget(null), 2000);
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Embeddable Widgets", url: "/widgets" }
  ];

  return (
    <>
      <MetaTags
        title="Embeddable Widgets - Real-Time Global Statistics for Your Website"
        description="Free embeddable widgets for world population, GDP, CO2 emissions, and COVID-19 statistics. Easy integration with iframe or JavaScript. Responsive and customizable."
        keywords="embeddable widgets, population counter widget, gdp widget, co2 emissions widget, coronavirus widget, free statistics widget, website counter"
        canonical="https://creatormeter.com/widgets"
      />
      <SchemaMarkup type="BreadcrumbList" data={breadcrumbs} />

      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Embeddable Widgets
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Add real-time global statistics to your website with our free, customizable widgets
            </p>
          </header>

          <section className="mb-12">
            <div className="bg-card border border-border rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Code className="w-6 h-6" />
                How to Use
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                <li>Choose a widget from the options below</li>
                <li>Select your preferred embed method (iframe or script)</li>
                <li>Copy the embed code</li>
                <li>Paste it into your website's HTML</li>
                <li>Customize width and height if needed</li>
              </ol>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {widgets.map((widget) => (
                <Card key={widget.id}>
                  <CardHeader>
                    <CardTitle>{widget.title}</CardTitle>
                    <CardDescription>{widget.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* Widget Preview */}
                    <div className="mb-6 bg-muted rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">Preview:</p>
                      <div className="bg-background rounded-lg overflow-hidden border border-border">
                        <iframe
                          src={widget.preview}
                          width="100%"
                          height={widget.height}
                          frameBorder="0"
                          scrolling="no"
                          title={widget.title}
                        />
                      </div>
                    </div>

                    {/* Embed Code */}
                    <Tabs defaultValue="iframe">
                      <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="iframe">iFrame</TabsTrigger>
                        <TabsTrigger value="script">Script</TabsTrigger>
                      </TabsList>
                      <TabsContent value="iframe" className="space-y-2">
                        <div className="bg-muted p-3 rounded-md text-xs font-mono overflow-x-auto">
                          {generateEmbedCode(widget, 'iframe')}
                        </div>
                        <Button
                          onClick={() => copyToClipboard(generateEmbedCode(widget, 'iframe'), `${widget.id}-iframe`)}
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          {copiedWidget === `${widget.id}-iframe` ? (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy iFrame Code
                            </>
                          )}
                        </Button>
                      </TabsContent>
                      <TabsContent value="script" className="space-y-2">
                        <div className="bg-muted p-3 rounded-md text-xs font-mono overflow-x-auto">
                          {generateEmbedCode(widget, 'script')}
                        </div>
                        <Button
                          onClick={() => copyToClipboard(generateEmbedCode(widget, 'script'), `${widget.id}-script`)}
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          {copiedWidget === `${widget.id}-script` ? (
                            <>
                              <Check className="w-4 h-4 mr-2" />
                              Copied!
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 mr-2" />
                              Copy Script Code
                            </>
                          )}
                        </Button>
                      </TabsContent>
                    </Tabs>

                    <div className="mt-4 text-xs text-muted-foreground">
                      Dimensions: {widget.width} × {widget.height}px
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <strong>Real-time Updates</strong>
                  <p className="text-sm text-muted-foreground">Data updates automatically every second</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <strong>Responsive Design</strong>
                  <p className="text-sm text-muted-foreground">Adapts to any screen size</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <strong>Free to Use</strong>
                  <p className="text-sm text-muted-foreground">No API keys or registration required</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-500 mt-0.5" />
                <div>
                  <strong>Customizable</strong>
                  <p className="text-sm text-muted-foreground">Adjust dimensions to fit your layout</p>
                </div>
              </li>
            </ul>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WidgetsPage;
