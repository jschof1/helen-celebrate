import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Layout } from "./components/layout";

import { Home } from "./pages/home";
import { MeetHelen } from "./pages/meet-helen";
import { Funerals } from "./pages/funerals";
import { Weddings } from "./pages/weddings";
import { Costs } from "./pages/costs";
import { Faqs } from "./pages/faqs";
import { Links } from "./pages/links";
import { Contact } from "./pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/meet-helen" component={MeetHelen} />
        <Route path="/funerals" component={Funerals} />
        <Route path="/weddings" component={Weddings} />
        <Route path="/costs" component={Costs} />
        <Route path="/faqs" component={Faqs} />
        <Route path="/links" component={Links} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
