import { Helmet } from "react-helmet";
import { ArrowRight, Sparkles, Leaf, Heart, Recycle, ShoppingBag, Star, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>OUTFIX - Ta box d'outfit complet de seconde main</title>
        <meta
          name="description"
          content="Découvrez des box de vêtements de seconde main sélectionnées par notre IA styliste. Mode unique, éco-responsable et adaptée à votre personnalité."
        />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-background">
        <Navbar cartCount={0} />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 md:py-32 grid-pattern">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose/10 rounded-full blur-3xl animate-float delay-300" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8 animate-slide-up">
                  {/* Tags like on landing page */}
                  <div className="flex flex-wrap gap-3">
                    <span className="tag-yellow flex items-center gap-2">
                      <Sparkles className="h-4 w-4" />
                      IA Styliste
                    </span>
                    <span className="tag-green flex items-center gap-2">
                      <Leaf className="h-4 w-4" />
                      Seconde Main
                    </span>
                  </div>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                    La box seconde main qui renouvelle ton{" "}
                    <span className="text-rose">style</span>
                  </h1>

                  <p className="text-lg text-muted-foreground max-w-lg">
                    Découvrez des box de vêtements de seconde main soigneusement sélectionnées 
                    par notre IA styliste. Mode unique, éco-responsable et adaptée à votre personnalité.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link to="/catalog">
                      <Button variant="hero" size="xl">
                        Découvrir les box
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </Button>
                    </Link>
                    <Link to="/style-assistant">
                      <Button variant="outline" size="xl" className="border-primary">
                        <Sparkles className="h-5 w-5 mr-2" />
                        Assistant IA
                      </Button>
                    </Link>
                  </div>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-8 pt-4">
                    {[
                      { icon: Recycle, value: "50K+", label: "Vêtements sauvés", color: "text-green" },
                      { icon: Heart, value: "12K+", label: "Clients satisfaits", color: "text-rose" },
                      { icon: Leaf, value: "30T", label: "CO₂ économisé", color: "text-green" },
                    ].map((stat, index) => (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 animate-fade-in"
                        style={{ animationDelay: `${(index + 1) * 200}ms` }}
                      >
                        <div className={`p-2 bg-card rounded-lg shadow-soft`}>
                          <stat.icon className={`h-5 w-5 ${stat.color}`} />
                        </div>
                        <div>
                          <p className="text-xl font-bold text-foreground">{stat.value}</p>
                          <p className="text-sm text-muted-foreground">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Content - Image Grid */}
                <div className="relative hidden lg:block">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="relative rounded-2xl overflow-hidden shadow-elevated animate-fade-in delay-100">
                        <img
                          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=500&fit=crop"
                          alt="Fashion"
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-3 left-3 tag-yellow text-xs">
                          IA Styliste
                        </span>
                      </div>
                      <div className="rounded-2xl overflow-hidden shadow-card animate-fade-in delay-300">
                        <img
                          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
                          alt="Vintage"
                          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-4 pt-8">
                      <div className="rounded-2xl overflow-hidden shadow-card animate-fade-in delay-200">
                        <img
                          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop"
                          alt="Style"
                          className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="relative rounded-2xl overflow-hidden shadow-elevated animate-fade-in delay-400">
                        <img
                          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=500&fit=crop"
                          alt="Sustainable"
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute bottom-3 right-3 tag-green text-xs">
                          Seconde Main
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-card">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <span className="tag-rose mb-4 inline-block">Comment ça marche</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Pourquoi <span className="text-rose">OUTFIX</span> ?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Une nouvelle façon de consommer la mode, plus responsable et personnalisée
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Sparkles,
                    title: "IA Personnalisée",
                    description: "Notre assistant IA analyse votre style pour vous proposer des box parfaitement adaptées",
                    bgColor: "bg-secondary/10",
                    iconColor: "text-secondary"
                  },
                  {
                    icon: Leaf,
                    title: "Éco-Responsable",
                    description: "Chaque achat réduit les déchets textiles et préserve les ressources naturelles",
                    bgColor: "bg-green/10",
                    iconColor: "text-green"
                  },
                  {
                    icon: Star,
                    title: "Qualité Premium",
                    description: "Vêtements de seconde main soigneusement sélectionnés pour leur qualité et leur style",
                    bgColor: "bg-accent/10",
                    iconColor: "text-accent"
                  },
                  {
                    icon: TrendingUp,
                    title: "Prix Justes",
                    description: "Jusqu'à 70% moins cher que le neuf pour des pièces uniques et tendance",
                    bgColor: "bg-rose/10",
                    iconColor: "text-rose"
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 bg-background rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`p-3 ${feature.bgColor} rounded-xl w-fit mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`h-6 w-6 ${feature.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary relative overflow-hidden">
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center space-y-8">
                <Badge className="bg-secondary text-secondary-foreground text-sm px-4 py-2">
                  <ShoppingBag className="h-4 w-4 mr-2 inline" />
                  24 Box Disponibles
                </Badge>
                
                <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground">
                  Prêt(e) à transformer ta garde-robe ?
                </h2>
                
                <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
                  Rejoins des milliers de fashion lovers qui ont déjà adopté 
                  une mode plus responsable et personnalisée
                </p>

                <div className="flex flex-wrap justify-center gap-4 pt-4">
                  <Link to="/catalog">
                    <Button variant="hero" size="xl">
                      Explorer le catalogue
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/style-assistant">
                    <Button variant="glass" size="xl" className="text-primary-foreground border-primary-foreground/30">
                      <Sparkles className="h-5 w-5 mr-2" />
                      Parler à l'assistant
                    </Button>
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <Star className="h-4 w-4 text-secondary fill-secondary" />
                    <span className="font-medium">4.8/5</span>
                    <span className="opacity-70">(2,450 avis)</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <Leaf className="h-4 w-4 text-green-light" />
                    <span className="font-medium">50K+</span>
                    <span className="opacity-70">articles sauvés</span>
                  </div>
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <ShoppingBag className="h-4 w-4 text-secondary" />
                    <span className="font-medium">Livraison offerte</span>
                    <span className="opacity-70">dès 50€</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Impact Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="tag-green mb-4 inline-block">Notre Impact</span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Mode Circulaire, Impact <span className="text-green">Réel</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Chaque vêtement que tu choisis contribue à un futur plus durable
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    value: "50,000+",
                    label: "Vêtements Sauvés",
                    description: "Articles retirés du circuit de déchets textile",
                    color: "text-secondary"
                  },
                  {
                    value: "30 tonnes",
                    label: "CO₂ Économisé",
                    description: "Équivalent à 150,000 km en voiture",
                    color: "text-green"
                  },
                  {
                    value: "5M litres",
                    label: "Eau Préservée",
                    description: "Grâce à la réutilisation des textiles",
                    color: "text-rose"
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-8 bg-card rounded-2xl shadow-card animate-slide-up hover:shadow-elevated transition-all duration-300"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <p className={`text-4xl font-display font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </p>
                    <p className="text-lg font-semibold text-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Home;