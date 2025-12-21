import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function TuitionRates() {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-16">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Tuition Rates
        </h2>
        <p className="mt-2 text-muted-foreground">
          Weekly lessons. Welcome pack included (where stated). Simple pricing,
          no hidden fees.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Private */}
        <Card className="overflow-hidden">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between">
              <CardTitle>Private Tuition</CardTitle>
              <Badge variant="secondary">Weekly</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Pay per hour. Primary &amp; Secondary.
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            <RateRow left="Primary 1–2" right="$40 / hour" />
            <RateRow left="Primary 3–4" right="$45 / hour" />
            <RateRow left="Primary 5–6" right="$50 / hour" />
            <RateRow left="Secondary 1–2" right="$55 / hour" />
            <RateRow left="Secondary 3–5" right="$55 / hour" />

            <Separator />

            <div className="text-sm text-muted-foreground">
                <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Weekly lessons</li>
                    <li>• Welcome pack included</li>
                </ul>
            </div>
          </CardContent>
        </Card>

        {/* Group */}
        <Card className="overflow-hidden">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between">
              <CardTitle>Group Tuition</CardTitle>
              <Badge>Welcome Pack</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Monthly rate. Secondary only.
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            <RateRow left="Secondary 1–2" right="$280 / month" />
            <RateRow left="Secondary 3–5" right="$300 / month" />

            <Separator />

            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Weekly lessons</li>
              <li>• Welcome pack included</li>
            </ul>
          </CardContent>
        </Card>

        {/* Combo */}
        <Card className="overflow-hidden">
          <CardHeader className="space-y-2">
            <div className="flex items-center justify-between">
              <CardTitle>Combo (Private + Group)</CardTitle>
              <Badge>Best Value</Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Monthly bundle.
            </p>
          </CardHeader>

          <CardContent className="space-y-4">
            <div className="rounded-lg border bg-muted/40 p-4">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-medium">Combo Plan</span>
                <span className="text-2xl font-bold">$500</span>
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                per month
              </div>
            </div>

            <Separator />

            <ul className="space-y-1 text-sm text-muted-foreground">
              <li>• Weekly lessons</li>
              <li>• Welcome pack included</li>
            </ul>
          </CardContent>
        </Card>
      </div>

        {/* Other fees */}
        <div className="mt-10 rounded-xl border bg-white-50 p-6">
        <h3 className="text-lg font-semibold text-black">
            No Hidden Fees
        </h3>

        <ul className="mt-3 space-y-1 text-sm text-black-800">
            <li>✓ No deposit</li>
            <li>✓ No material fees</li>
            <li>✓ No registration fee</li>
        </ul>
        </div>

    </section>
  )
}

function RateRow({ left, right }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span className="text-sm">{left}</span>
      <span className="text-sm font-semibold">{right}</span>
    </div>
  )
}
