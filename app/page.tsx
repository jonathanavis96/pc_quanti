import Image from "next/image";
import { Button } from "@/src/components/Button";
import { Card } from "@/src/components/Card";
import { Container } from "@/src/components/Container";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white font-sans">
      <Container maxWidth="lg">
        <main className="flex min-h-screen w-full flex-col items-center justify-between py-32 sm:items-start">
          <Image
            src="/logo.png"
            alt="PC Quanti logo"
            width={100}
            height={100}
            priority
          />
          <Card variant="elevated" padding="lg">
            <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
              <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-pc-neutral-900">
                PC Quanti - Project Management Services
              </h1>
              <p className="max-w-md text-lg leading-8 text-pc-neutral-600">
                Professional project management and quantity surveying services for your construction projects.
              </p>
            </div>
          </Card>
          <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </main>
      </Container>
    </div>
  );
}
