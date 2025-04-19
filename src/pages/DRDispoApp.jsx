import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHead, TableHeader, TableRow, TableCell, TableBody } from "@/components/ui/table";

export default function DRDispoApp() {
  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-2xl font-bold">DR Disposition – Internes System</h1>

      <Tabs defaultValue="dashboard">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="dispo">Disposition</TabsTrigger>
          <TabsTrigger value="mitarbeiter">Mitarbeiter</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-4">📊 Lead-Übersicht</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Datum</TableHead>
                    <TableHead>Firma</TableHead>
                    <TableHead>Branche</TableHead>
                    <TableHead>Stadt</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>E-Mail</TableHead>
                    <TableHead>Antwort</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2025-04-16</TableCell>
                    <TableCell>Muster GmbH</TableCell>
                    <TableCell>IT</TableCell>
                    <TableCell>Erkrath</TableCell>
                    <TableCell>Offen</TableCell>
                    <TableCell>✅</TableCell>
                    <TableCell>❌</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2025-04-16</TableCell>
                    <TableCell>CleanTech</TableCell>
                    <TableCell>Gebäudereinigung</TableCell>
                    <TableCell>Hilden</TableCell>
                    <TableCell>Reagiert</TableCell>
                    <TableCell>✅</TableCell>
                    <TableCell>✅</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2025-04-17</TableCell>
                    <TableCell>Erkrath Media</TableCell>
                    <TableCell>Marketing</TableCell>
                    <TableCell>Erkrath</TableCell>
                    <TableCell>Reagiert</TableCell>
                    <TableCell>✅</TableCell>
                    <TableCell>✅</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2025-04-17</TableCell>
                    <TableCell>FitLife Studio</TableCell>
                    <TableCell>Fitness</TableCell>
                    <TableCell>Haan</TableCell>
                    <TableCell>Offen</TableCell>
                    <TableCell>✅</TableCell>
                    <TableCell>❌</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2025-04-18</TableCell>
                    <TableCell>Recht & Klar</TableCell>
                    <TableCell>Rechtsanwalt</TableCell>
                    <TableCell>Mettmann</TableCell>
                    <TableCell>Interessiert</TableCell>
                    <TableCell>✅</TableCell>
                    <TableCell>✅</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="dispo">
          <Card>
            <CardContent className="p-4">
              <h2 className="font-semibold mb-4">📅 Einsatzplanung</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Datum</TableHead>
                    <TableHead>Uhrzeit</TableHead>
                    <TableHead>Kunde</TableHead>
                    <TableHead>Adresse</TableHead>
                    <TableHead>Mitarbeiter</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>25.04.2025</TableCell>
                    <TableCell>08:00</TableCell>
                    <TableCell>Praxis Müller</TableCell>
                    <TableCell>Hauptstraße 12</TableCell>
                    <TableCell>Ali Demir</TableCell>
                    <TableCell>✅</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mitarbeiter">
          <Card>
            <CardContent className="p-4 space-y-4">
              <h2 className="font-semibold">👥 Mitarbeiter eintragen</h2>
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="Name" />
                <Input placeholder="E-Mail" />
                <Input placeholder="Telefon" />
                <Input placeholder="Einsatzgebiet" />
              </div>
              <Button className="mt-4">Speichern</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}