import { useState, useMemo } from "react";
import { Card } from "../components/Card";
import { CardContent } from "../components/CardContent";
import { Button } from "../components/Button";

// --- DEMO DATA ----------------------------------------------------
const demoProducts = [
  { id: 1, name: "AdBoost Pro", category: "Marketing", price: 29, developer: "AdLabs", description: "AI‑driven ad optimization for social media and search campaigns.", rating: 4.8 },
  { id: 2, name: "LeadMagnet Suite", category: "Marketing", price: 19, developer: "SellMore Inc.", description: "Funnels, landing pages, and automation tools in one, with seamless integration.", rating: 4.5 },
  { id: 3, name: "ContentPilot AI", category: "Marketing", price: 49, developer: "ContentWave", description: "Automated content creation and multi‑channel posting.", rating: 4.7 },
  { id: 4, name: "FlowCRM", category: "CRM Manager", price: 39, developer: "FlowTech", description: "Smart CRM with automated follow‑ups and customer analytics.", rating: 4.6 },
  { id: 5, name: "ClientTrack Vision", category: "CRM Manager", price: 25, developer: "VisionSoft", description: "Unified customer timelines and lead scoring system.", rating: 4.4 },
  { id: 6, name: "SalesEdge Cloud", category: "CRM Manager", price: 59, developer: "SalesEdge Digital", description: "Deal pipelines, reminders, and AI forecasting.", rating: 4.7 },
  { id: 7, name: "Nimbus Storage", category: "Cloud Services", price: 15, developer: "Nimbus Corp.", description: "Enterprise‑grade cloud storage with encryption.", rating: 4.9 },
  { id: 8, name: "ElasticCompute X", category: "Cloud Services", price: 99, developer: "ComputeX Labs", description: "High‑performance auto‑scaling compute resources.", rating: 4.8 },
  { id: 9, name: "SkyDeploy", category: "Cloud Services", price: 55, developer: "SkyWorks", description: "Zero‑downtime deployment + CI/CD pipelines.", rating: 4.6 },
  { id: 10, name: "BuzzReach", category: "Marketing", price: 22, developer: "BuzzReach Studio", description: "Omni‑channel campaign tracking and ROI analytics, with real-time insights.", rating: 4.5 },
  { id: 11, name: "BrandPilot AI", category: "Marketing", price: 42, developer: "BrandPilot", description: "Brand management + automated sentiment monitoring.", rating: 4.6 },
  { id: 12, name: "CRM360", category: "CRM Manager", price: 32, developer: "CRM360 Global", description: "Task automation and email sync, with seamless integration.", rating: 4.5 },
  { id: 13, name: "MegaCloud Vault", category: "Cloud Services", price: 12, developer: "MegaCloud Systems", description: "Secure enterprise archiving + backup + disaster recovery + compliance.", rating: 4.7 },
  { id: 14, name: "ContactSphere", category: "CRM Manager", price: 28, developer: "SphereTech", description: "Customer interaction dashboards with AI suggestions.", rating: 4.4 },
  { id: 15, name: "CloudMatrix", category: "Cloud Services", price: 79, developer: "MatrixCloud AI", description: "Multi‑region deployment orchestrator.", rating: 4.8 },
  { id: 16, name: "AdVantage Max", category: "Marketing", price: 35, developer: "AdVantage Labs", description: "Comprehensive ad management with A/B testing and budget optimization.", rating: 4.7 },
  { id: 17, name: "TaskFlow CRM", category: "CRM Manager", price: 45, developer: "TaskFlow Inc.", description: "Integrated task management and CRM for enhanced productivity.", rating: 4.9 },
  { id: 18, name: "CloudSync Pro", category: "Cloud Services", price: 65, developer: "SyncTech", description: "Real-time data synchronization across multiple cloud platforms.", rating: 4.8 },
  { id: 19, name: "MarketBoost", category: "Marketing", price: 27, developer: "BoostMedia", description: "AI-powered market analysis and campaign recommendations.", rating: 4.8 },
  { id: 20, name: "ClientConnect", category: "CRM Manager", price: 38, developer: "ConnectSoft", description: "Seamless client communication and relationship tracking.", rating: 4.6 },
  { id: 21, name: "DataCloud Hub", category: "Cloud Services", price: 88, developer: "DataHub Solutions", description: "Centralized cloud data management with advanced security features.", rating: 4.7 },
  { id: 22, name: "ConvertIQ", category: "Marketing", price: 31, developer: "IQ Marketing", description: "Conversion rate optimization tools with AI-driven insights.", rating: 4.7 },
  { id: 23, name: "SalesCRM Elite", category: "CRM Manager", price: 50, developer: "EliteSoft", description: "Advanced sales tracking and customer management features.", rating: 4.5 },
  { id: 24, name: "CloudGuard", category: "Cloud Services", price: 70, developer: "SecureCloud Inc.", description: "Comprehensive cloud security and threat detection services.", rating: 4.4 },
  { id: 25, name: "AdWise", category: "Marketing", price: 26, developer: "WiseAds", description: "AI-driven ad placement and performance tracking.", rating: 4.6 },
  { id: 26, name: "FunnelPro", category: "Marketing", price: 34, developer: "FunnelTech", description: "End-to-end sales funnel management with automation features.", rating: 4.7 },
  { id: 27, name: "Boostify CRM", category: "CRM Manager", price: 29, developer: "Boostify Solutions", description: "Customer relationship management with AI-powered insights.", rating: 4.5 },
  { id: 28, name: "CloudFlex", category: "Cloud Services", price: 95, developer: "FlexCloud", description: "Flexible cloud infrastructure with auto-scaling capabilities.", rating: 4.9 },
  { id: 29, name: "AutoMailer", category: "Marketing", price: 21, developer: "MailerTech", description: "Automated email marketing campaigns with AI personalization.", rating: 4.5 },
  { id: 30, name: "DataTrack", category: "CRM Manager", price: 36, developer: "DataTrack Inc.", description: "Comprehensive CRM with data analytics and reporting features.", rating: 4.6 },
  { id: 31, name: "CloudNova", category: "Cloud Services", price: 85, developer: "NovaCloud", description: "Next-gen cloud solutions with AI-driven resource management.", rating: 4.8 },
  { id: 32, name: "SocialSpark", category: "Marketing", price: 30, developer: "SparkMedia", description: "Social media marketing automation with AI content suggestions.", rating: 4.7 },
  { id: 33, name: "EngageCRM", category: "CRM Manager", price: 42, developer: "EngageSoft", description: "Customer engagement tracking with AI-driven insights and recommendations.", rating: 4.9 },
  { id: 34, name: "CloudSphere", category: "Cloud Services", price: 90, developer: "SphereCloud", description: "Comprehensive cloud management with AI optimization features.", rating: 4.6 },
  { id: 35, name: "AdMaster", category: "Marketing", price: 33, developer: "MasterAds", description: "AI-powered ad campaign management and optimization tools.", rating: 4.8 },
  { id: 36, name: "ClientWise CRM", category: "CRM Manager", price: 37, developer: "WiseClients", description: "Smart CRM with AI-driven client insights and management features.", rating: 4.5 },
  { id: 37, name: "CloudZenith", category: "Cloud Services", price: 100, developer: "ZenithCloud", description: "High-performance cloud solutions with AI resource allocation.", rating: 4.9 },
  { id: 38, name: "PromoGenie", category: "Marketing", price: 24, developer: "GenieMedia", description: "AI-driven promotional campaign creation and management.", rating: 4.7 },
  { id: 39, name: "SalesBoost CRM", category: "CRM Manager", price: 44, developer: "BoostSales", description: "Sales-focused CRM with AI-powered lead scoring and management.", rating: 4.6 },
  { id: 40, name: "CloudPinnacle", category: "Cloud Services", price: 92, developer: "PinnacleCloud", description: "Top-tier cloud services with AI-driven performance optimization.", rating: 4.8 },
  { id: 41, name: "AdVantage Max", category: "Marketing", price: 35, developer: "AdVantage Labs", description: "Comprehensive ad management with A/B testing and budget optimization.", rating: 4.7 },
  { id: 42, name: "VirtualAssist CRM", category: "CRM Manager", price: 41, developer: "AssistTech", description: "AI-powered virtual assistant for CRM tasks and customer interactions.", rating: 4.9 },
];

const categories = ["All", "Marketing", "CRM Manager", "Cloud Services"];
const sortOptions = [
  { value: "name", label: "Name (A–Z)" },
  { value: "price", label: "Price (Low → High)" },
  { value: "rating", label: "Rating (High → Low)" }
];

export default function SaaSProductList({ query = "" }) {
  const [search, setSearch] = useState(query);
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [page, setPage] = useState(1);
  const perPage = 6;

  // --- FILTER -----------------------------------------------------
  const filtered = useMemo(() => {
    let data = demoProducts.filter((p) => {
      const matchSearch =
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.category.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());

      const matchCategory = category === "All" || p.category === category;
      return matchSearch && matchCategory;
    });

    if (sortBy === "name") data.sort((a, b) => a.name.localeCompare(b.name));
    if (sortBy === "price") data.sort((a, b) => a.price - b.price);
    if (sortBy === "rating") data.sort((a, b) => b.rating - a.rating);

    return data;
  }, [search, category, sortBy]);

  // --- PAGINATION -------------------------------------------------
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="w-full space-y-4">
      {/* Search */}
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        placeholder="Search SaaS products..."
        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />

      {/* Category Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c);
              setPage(1);
            }}
            className={`px-4 py-2 rounded-xl whitespace-nowrap border ${
              category === c ? "bg-[#31587c] text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Sorting */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="p-2 border rounded-xl"
      >
        {sortOptions.map((s) => (
          <option key={s.value} value={s.value}>
            {s.label}
          </option>
        ))}
      </select>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginated.map((p) => (
          <Card
            key={p.id}
            className="bg-white rounded-2xl shadow p-4 cursor-pointer hover:shadow-lg transition"
          >
            <CardContent>
              <h3 className="font-semibold text-lg text-[#31587c]">{p.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.description}</p>

              <p className="text-sm mt-2 font-medium text-black">Category: {p.category}</p>
              <p className="text-sm font-medium text-gray-700">Developer: {p.developer}</p>

              <p className="text-md font-semibold text-green-600 mt-1">
                ${p.price}/mo
              </p>

              <p className="text-sm mt-1 font-semibold text-orange-500">⭐ {p.rating}</p>

              <div className="flex gap-2 mt-3">
                <Button className="bg-[#31587c] text-white px-4 py-2 rounded-xl w-full">
                  Preview
                </Button>
                <Button className="bg-teal-500 text-white px-4 py-2 rounded-xl w-full">
                  Buy
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-3 justify-center mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-2 border rounded-xl disabled:opacity-40"
        >
          Prev
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-2 border rounded-xl disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </div>
  );
}
