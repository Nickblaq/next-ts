/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ueUZwLMXbdi
 */
import Link from "next/link"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <DollarSignIcon className="h-8 w-8" />
          <span className="sr-only">Revenue Reconciliation App</span>
        </Link>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  The ultimate tool for CPAs to reconcile revenue
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Automate your reconciliation process, minimize errors, and save countless hours of work. Our tool is
                  designed specifically for CPAs and accountants.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Pre-order Now
                  </Link>
                </div>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto w-full aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/placeholder.svg"
              width="1270"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Transforming Revenue Reconciliation for CPAs
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our tool is designed to automate and streamline your revenue reconciliation process, providing you
                  with accurate, real-time data and reducing the risk of errors.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Real-time Data</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Get instant access to your financial data, updated in real time for the most accurate reporting.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Error Minimization</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our tool reduces the risk of human error, ensuring your data is always accurate and reliable.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Time Saving</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Automate your reconciliation process and save countless hours of manual data entry and checking.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Pre-order Now
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Pre-order Pricing</h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Take advantage of our pre-order pricing and be the first to experience the future of revenue
                reconciliation.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>$20/month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul>
                    <li>Real-time data access</li>
                    <li>Error minimization</li>
                    <li>Up to 100 transactions/month</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Pre-order Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Premium</CardTitle>
                  <CardDescription>$50/month</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <ul>
                    <li>Real-time data access</li>
                    <li>Error minimization</li>
                    <li>Unlimited transactions</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button>Pre-order Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© Revenue Reconciliation App. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}
