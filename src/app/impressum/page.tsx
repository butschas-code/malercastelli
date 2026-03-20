import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum der ${business.name} – Malerunternehmen in Luzern.`,
};

export default function ImpressumPage() {
  const { contact, keyPerson } = business;

  return (
    <>
      <PageHero
        label="Rechtliches"
        title="Impressum"
        description="Verantwortlich für den Inhalt und rechtliche Hinweise zur Website der Castelli AG Luzern."
        image="/images/Kontakt/header.jpg"
        imageAlt="Castelli AG Luzern – Impressum"
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid gap-12 sm:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold mb-4">Verantwortlich für den Inhalt</h2>
              <p className="text-muted-foreground leading-relaxed">
                {business.name}<br />
                {keyPerson.name}<br />
                {contact.address.street}<br />
                {contact.address.zip} {contact.address.city}<br />
                {contact.address.country}
              </p>

              <div className="mt-6 space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Telefon:</span> {contact.phone}
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">E-Mail:</span> {contact.email}
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Handelsregister & Rechtsform</h2>
              <p className="text-muted-foreground leading-relaxed">
                <span className="font-medium text-foreground">Handelsregister:</span> CHE107.026.188<br />
                <span className="font-medium text-foreground">Rechtsform:</span> Aktiengesellschaft
              </p>
            </div>
          </div>

          <div className="mt-16 pt-16 border-t border-border space-y-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Haftungsausschluss</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Haftung für Inhalte</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Haftung für Links</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Urheberrecht</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem schweizerischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
