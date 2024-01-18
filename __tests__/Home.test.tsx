import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

async function resolvedComponent(Component: any, props?: any) {
  const ComponentResolved = await Component(props);
  return () => ComponentResolved;
}

describe("Home Page - Rendering", () => {
  it("should have Home Page text", async () => {
    const HomePage = await resolvedComponent(Home);
    render(<HomePage />);
    await screen.findByText("Aniweb");
  });
});
