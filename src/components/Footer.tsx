import { Instagram, Twitter, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="font-display text-xl font-bold">OUTFIX</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              Box d'outfit complet de seconde main (invendus et occasion). 
              Notre IA te conseille la box la plus proche de ton style.
            </p>
            <div className="flex gap-2">
              <Button variant="glass" size="icon" className="bg-primary-foreground/10 border-0 hover:bg-primary-foreground/20">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon" className="bg-primary-foreground/10 border-0 hover:bg-primary-foreground/20">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="glass" size="icon" className="bg-primary-foreground/10 border-0 hover:bg-primary-foreground/20">
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Explorer</h3>
            <ul className="space-y-2">
              {["Toutes les Box", "Comment ça marche", "Assistant IA", "Durabilité"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold mb-4">Aide</h3>
            <ul className="space-y-2">
              {["FAQ", "Livraison", "Retours", "Contact", "Guide des tailles"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Reçois nos conseils style et offres exclusives.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="ton@email.com"
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
              />
              <Button variant="hero" size="icon" className="px-3">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/70">
            © 2024 OUTFIX. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-secondary transition-colors">
              Mentions légales
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-secondary transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;