import { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { business } from "@/data/business";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung der ${business.name} – Informationen zum Umgang mit Ihren Daten.`,
};

export default function DatenschutzPage() {
  const { contact, keyPerson } = business;

  return (
    <>
      <PageHero
        label="Rechtliches"
        title="Datenschutz"
        description="Informationen darüber, wie wir Ihre personenbezogenen Daten erheben, verarbeiten und schützen."
        image="/images/58c231be-418a-4685-a8b2-ab43de29d60f.jpg.avif"
        imageAlt="Castelli AG Luzern – Datenschutz"
      />

      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-bold mb-8 text-foreground uppercase tracking-tight">DATENSCHUTZERKLÄRUNG FÜR DAS VERTRAGSVERHÄLTNIS MIT KUNDEN</h2>

            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <p>
                1. Wir erheben, verarbeiten und nutzen Ihre Personendaten in Übereinstimmung mit dem Inhalt der vorliegenden Datenschutzbestimmungen sowie den anwendbaren 
                Datenschutzvorschriften, insbesondere dem Schweizer Datenschutzgesetz (DSG).
              </p>

              <div className="space-y-4">
                <p>
                  2. Personendaten im Sinne dieser Datenschutzbestimmungen sind alle Informationen, die sich auf eine bestimmte oder bestimmbare natürliche Person beziehen. Wir bearbeiten Personendaten, welche wir im Rahmen der Vertragsbeziehung von Ihnen oder beteiligten Dritten erhalten oder die wir selbst erheben. Verantwortlicher für die gestützt auf diese Datenschutzerklärung erfolgende Bearbeitung von Personendaten ist:
                </p>
                <div className="pl-6 border-l-2 border-primary/20 italic text-foreground not-prose">
                  <p className="font-semibold">{business.name}</p>
                  <p>{keyPerson.name}</p>
                  <p>{contact.address.street}</p>
                  <p>{contact.address.zip} {contact.address.city}</p>
                  <p>{contact.email}</p>
                </div>
              </div>

              <p>
                3. Einerseits erhalten wir Personendaten von Ihnen bzw. von den betroffenen Personen selbst, wenn Sie bzw. diese uns über E-Mail oder per Telefon kontaktieren und unsere Dienstleistungen nachfragen. Dazu gehören z.B. Name und Kontaktdaten.
              </p>

              <p>
                4. Andererseits bearbeiten wir Personendaten, die wir in unserer Korrespondenz mit Dritten (namentlich Lieferanten, andere Unternehmungen, etc.) im Rahmen des Vertragsverhältnisses erhalten (z.B. Name, Kontaktdaten). Zudem erheben wir einige Personendaten selbst, z.B. auf Websites.
              </p>

              <p>
                5. Diese Personendaten bearbeiten wir primär, um unsere werkvertraglichen Leistungen erbringen, dokumentieren und abrechnen zu können.
              </p>

              <p>
                6. Zur Erreichung der erwähnten Zwecke kann es notwendig sein, dass wir die Personendaten an folgende Kategorien von Empfängern weitergeben: Lieferanten, Geschäftspartner, mit denen wir die werkvertraglichen Leistungen allenfalls koordinieren müssen, andere am Werkvertrag beteiligte Unternehmungen sowie Behörden und Gerichte.
              </p>

              <p>
                7. Wir speichern die Personendaten nur so lange, wie dies zur Abwicklung des Vertragsverhältnisses notwendig ist, eine gesetzliche Aufbewahrungs- und Dokumentationspflicht besteht oder wir daran ein überwiegendes privates oder öffentliches Interesse haben. Wir treffen dabei verhältnismässige und zumutbare Vorkehrungen zum Schutz von Personendaten vor Verlust, unberechtigter Veränderung oder unbefugten Zugriffen Dritter.
              </p>

              <p>
                8. Wir berücksichtigen bei der Datenbearbeitung die Bearbeitungsgrundsätze der Rechtmässigkeit, der Verhältnismässigkeit, der Zweckbindung, der Richtigkeit, der Transparenz – insbesondere die Erfüllung der Informationspflichten – und der Datensicherheit. Wir weisen Sie darauf hin, dass wir im Rahmen des Vertragsverhältnisses auf externe IT-Dienstleister und Cloud-Provider mit Servern in der Schweiz zurückgreifen. Wir setzen sodann bestimmte IT-Dienstleistungen sowie Kommunikationsmittel ein, welche mit Datensicherheitsrisiken verbunden sein können (z.B. E-Mail, Videokonferenzen). Es obliegt Ihnen, uns über den Wunsch nach besonderen Sicherheitsmassnahmen zu orientieren.
              </p>

              <p>
                9. Sie haben das Recht, Auskunft über Ihre von uns verarbeiteten Personendaten zu verlangen. Insbesondere können Sie Auskunft über die Personendaten als solche, den Bearbeitungszweck, die Aufbewahrungsdauer oder, falls dies nicht möglich ist, die Kriterien zur Festlegung dieser Dauer, die Herkunft Ihrer Daten, sofern diese nicht bei Ihnen erhoben wurden, gegebenenfalls über das Vorliegen einer automatisierten Einzelentscheidung sowie gegebenenfalls über die Empfänger oder die Kategorien von Empfängern, denen Personendaten bekanntgegeben werden, verlangen. Sie haben auch das Recht, eine allenfalls erteilte Einwilligung zur Nutzung Ihrer Personendaten jederzeit zu widerrufen. Sie können Ihre genannten Rechte jederzeit bei uns geltend machen unter der angegebenen Kontaktadresse. Sofern Sie der Auffassung sind, dass die Verarbeitung Ihrer Personendaten durch uns im Widerspruch zu den geltenden Datenschutzbestimmungen steht, haben Sie die Möglichkeit, sich beim Eidgenössischen Datenschutz- und Öffentlichkeitsbeauftragten zu beschweren.
              </p>

              <p>
                10. Wir behalten uns das Recht vor, diese Datenschutzbestimmungen jederzeit mit Wirkung für die Zukunft zu ändern. Eine jeweils aktuelle Version ist auf der Website verfügbar. Bitte suchen Sie die Website regelmässig auf und informieren Sie sich über die geltenden Datenschutzbestimmungen.
              </p>

              <div className="space-y-4">
                <p>
                  11. Sie können Ihre datenschutzrechtlichen Betroffenenrechte jederzeit bei uns geltend machen unter der angegebenen Kontaktadresse:
                </p>
                <div className="pl-6 border-l-2 border-primary/20 italic text-foreground not-prose">
                  <p className="font-semibold">{business.name}</p>
                  <p>{keyPerson.name}</p>
                  <p>{contact.address.street}</p>
                  <p>{contact.address.zip} {contact.address.city}</p>
                  <p>{contact.email}</p>
                </div>
                <p>
                  Ebenfalls können Sie uns bei Fragen zu unseren Datenschutzbestimmungen unter der angegebenen Kontaktadresse kontaktieren.
                </p>
                <p className="font-medium text-foreground">Stand: 16.06.2025</p>
              </div>
            </div>

            <div className="mt-20 pt-16 border-t border-border space-y-12 text-muted-foreground leading-relaxed">
              <div className="not-prose">
                <h2 className="text-xl font-bold text-foreground mb-4">Website-Analyse mit Google Analytics</h2>
                <div className="space-y-4">
                  <p>
                    Diese Website nutzt Google Analytics 4, einen Webanalyse-Dienst der Google LLC, nachdem die Einwilligung des Benutzers eingeholt wurde. Die zuständigen Stellen sind Google Ireland Limited, Google Building Gordon House, 4 Barrow St, Dublin, D04 E5W5, Irland, für Benutzer aus der EU/EWR und der Schweiz. Google Analytics 4 praktiziert standardmäßig die IP-Anonymisierung, d.h., deine IP-Adresse wird sofort gekürzt, wenn du mit dieser Website interagierst. Nur in seltenen Fällen wird deine vollständige IP an einen in den USA basierten Google-Server übertragen und dort gekürzt. Google beteuert, dass die über Google Analytics übertragene IP niemals mit anderen Google-Daten kombiniert wird. Google Analytics 4 wird nur mit deiner Zustimmung über das Cookie-Banner aktiviert und kann jederzeit über die Cookie-Einstellungen rückgängig gemacht werden.
                  </p>
                  <p>
                    Die verarbeiteten Daten umfassen: Nutzungsdaten wie Seitenaufrufe, Website-Interaktion, allgemeiner Standort und Besuchsdauer; und Kommunikationsdaten wie gekürzte IP-Adressen, User-Agent, Spracheinstellungen und Bildschirmauflösung. Der Zweck dieser Datenverarbeitung besteht darin, dass Google in Ihrem Namen die Nutzung Ihrer Website auswertet, Berichte über die Aktivitäten zusammenstellt und die Leistung der Website analysiert. Diese Datenverarbeitung ist legal, basierend auf deiner Zustimmung gemäß Art. 6 Abs. 1 S. 1 lit. a DSGVO und § 25 Abs. 1 S. 1 TDDDG.
                  </p>
                  <p>
                    Google Ireland Limited, Google LLC und Alphabet Inc sind die Empfänger dieser Daten. Deine Website-Nutzungsinformationen werden in der Regel an einen Google-Server in den USA gesendet, eine Aktion, die durch den jüngsten Angemessenheitsbeschluss der Europäischen Kommission vom 10. Juli 2023 legitimiert wurde, der die Zertifizierung von Google LLC unter dem EU-US-Datenschutzschild anerkennt. In Bezug auf die Datenspeicherung wird jede Daten, die mit Cookies verknüpft sind, automatisch nach einer bestimmten Zeit gelöscht, monatlich für Daten, die ihre Aufbewahrungsfrist erreicht haben, und maximal 2 Jahre für Google Analytics-Cookies.
                  </p>
                  <p>
                    Für weitere Informationen zu den Nutzungsbedingungen von Google Analytics und zur Datenschutzrichtlinie von Google, besuchen Sie bitte <a href="https://policies.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://policies.google.com/</a> und <a href="https://support.google.com/analytics/answer/12017362" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://support.google.com/analytics/answer/12017362</a>.
                  </p>
                </div>
              </div>

              <div className="not-prose">
                <h2 className="text-xl font-bold text-foreground mb-4">Webseitenanalyse (Jimdo Statistiken)</h2>
                <div className="space-y-4">
                  <p>
                    Wenn du unsere Website besuchst, sammeln wir Informationen über deine Nutzung durch ein Webanalyse-Tool, das von unserem Hosting-Service bereitgestellt wird. Dieses Tool sammelt und kombiniert deine IP-Adresse und deinen User Agent, verkürzt sie und speichert diese Daten mit einer Hash-Funktion. Durch diesen Vorgang wird eine Besucherkennung erstellt, die mit einem zufällig generierten Wert (SALT) verschlüsselt ist, der sich alle 24 Stunden ändert. Diese Methode stellt sicher, dass deine IP-Adresse nicht aus dem gespeicherten Besucheridentifikator rekonstruiert werden kann, so dass deine Anonymität gewahrt bleibt. Außerdem führen wir diese Informationen nicht mit anderen Daten zusammen und sie werden nur auf dem Server des Hosting-Anbieters gespeichert.
                  </p>
                  <p>
                    Wir verarbeiten auch Webanalysedaten, HTTP-Daten und Webanalyseprofildaten. Das von uns verwendete Webanalysetool erstellt und speichert ein Webanalyseprofil, das Details über deine Nutzung der Website enthält, wie z. B. Seitenaufrufe, Besuchshäufigkeit, Verweildauer auf jeder Seite und den User Agent deines Geräts. Dazu gehören Nutzungsdaten (wie besuchte Webseiten und Zugriffszeiten) und Kommunikationsdaten (wie Browsertyp, Betriebssystem und IP-Adressen).
                  </p>
                  <p>
                    Mit der Verarbeitung dieser Daten wollen wir das Nutzerverhalten in zusammengefasster Form analysieren, um die Darstellung und den Inhalt unserer Website zu verbessern. Die Rechtsgrundlage für diese Verarbeitung ist unser berechtigtes Interesse (Art. 6 Abs. 1 lit. (f) GDPR), insbesondere an der Durchführung von Webmessungen, um unsere Produkte und unsere Website zu verbessern.
                  </p>
                  <p>
                    Die erhobenen Daten werden mit unserem Website-Hosting-Anbieter geteilt und innerhalb der EU verarbeitet.
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
