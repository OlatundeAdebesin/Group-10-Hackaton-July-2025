import React, { useState, useMemo, useEffect } from "react";
import { Card } from "../components/Card";
import { CardContent } from "../components/CardContent";
import { Button } from "../components/Button";

const demoProducts = [
  { id: 1, name: "AdBoost Pro", category: "Marketing", price: 29, developer: "AdLabs", description: "Automated ad optimization for social and search campaigns.", rating: 4.8 },
  { id: 2, name: "LeadMagnet Suite", category: "Marketing", price: 19, developer: "SellMore Inc.", description: "Funnels, landing pages, and automation tools in one.", rating: 4.5 },
  { id: 3, name: "ContentPilot AI", category: "Marketing", price: 49, developer: "ContentWave", description: "Automated content creation and multi-channel posting.", rating: 4.7 },
  { id: 4, name: "FlowCRM", category: "CRM Manager", price: 39, developer: "FlowTech", description: "Smart CRM with automated follow-ups and customer analytics.", rating: 4.6 },
  { id: 5, name: "ClientTrack Vision", category: "CRM Manager", price: 25, developer: "VisionSoft", description: "Unified customer timelines and lead scoring system.", rating: 4.4 },
  { id: 6, name: "SalesEdge Cloud", category: "CRM Manager", price: 59, developer: "SalesEdge Digital", description: "Deal pipelines, reminders, and AI forecasting.", rating: 4.7 },
  { id: 7, name: "Nimbus Storage", category: "Cloud Services", price: 15, developer: "Nimbus Corp.", description: "Enterprise-grade cloud storage with encryption.", rating: 4.9 },
  { id: 8, name: "ElasticCompute X", category: "Cloud Services", price: 99, developer: "ComputeX Labs", description: "High-performance auto-scaling compute resources.", rating: 4.8 },
  { id: 9, name: "SkyDeploy", category: "Cloud Services", price: 55, developer: "SkyWorks", description: "Zero-downtime deployment + CI/CD pipelines.", rating: 4.6 },
  { id: 10, name: "BuzzReach", category: "Marketing", price: 22, developer: "BuzzReach Studio", description: "Omni-channel campaign tracking and ROI analytics.", rating: 4.5 },
  { id: 11, name: "BrandPilot AI", category: "Marketing", price: 42, developer: "BrandPilot", description: "Brand management + automated sentiment monitoring.", rating: 4.6 },
  { id: 12, name: "CRM360", category: "CRM Manager", price: 32, developer: "CRM360 Global", description: "Task automation and email sync.", rating: 4.5 },
  { id: 13, name: "MegaCloud Vault", category: "Cloud Services", price: 12, developer: "MegaCloud Systems", description: "Secure enterprise archiving + backup.", rating: 4.7 },
  { id: 14, name: "ContactSphere", category: "CRM Manager", price: 28, developer: "SphereTech", description: "Customer interaction dashboards with AI suggestions.", rating: 4.4 },
  { id: 15, name: "CloudMatrix", category: "Cloud Services", price: 79, developer: "MatrixCloud AI", description: "Multi-region deployment orchestrator.", rating: 4.8 },
  { id: 16, name: "AdVantage Max", category: "Marketing", price: 35, developer: "AdVantage Labs", description: "Comprehensive ad management with A/B testing and budget optimization.", rating: 4.7 },
  { id: 17, name: "TaskFlow CRM", category: "CRM Manager", price: 45, developer: "TaskFlow Inc.", description: "Integrated task management and CRM for enhanced productivity.", rating: 4.9 },
  { id: 18, name: "CloudSync Pro", category: "Cloud Services", price: 65, developer: "SyncTech", description: "Real-time data synchronization across multiple cloud platforms.", rating: 4.8 },
  { id: 19, name: "MarketBoost", category: "Marketing", price: 27, developer: "BoostMedia", description: "Automated market analysis and campaign recommendations.", rating: 4.8 },
  { id: 20, name: "ClientConnect", category: "CRM Manager", price: 38, developer: "ConnectSoft", description: "Seamless client communication and relationship tracking.", rating: 4.6 },
  { id: 22, name: "ConvertIQ", category: "Marketing", price: 31, developer: "IQ Marketing", description: "Conversion rate optimization tools with Automated insights.", rating: 4.7 },
  { id: 23, name: "SalesCRM Elite", category: "CRM Manager", price: 50, developer: "EliteSoft", description: "Advanced sales tracking and customer management features.", rating: 4.5 },
  { id: 24, name: "CloudGuard", category: "Cloud Services", price: 70, developer: "SecureCloud Inc.", description: "Comprehensive cloud security and threat detection services.", rating: 4.4 },
  { id: 25, name: "AdWise", category: "Marketing", price: 26, developer: "WiseAds", description: "Automated ad placement and performance tracking.", rating: 4.6 },
  { id: 26, name: "FunnelPro", category: "Marketing", price: 34, developer: "FunnelTech", description: "End-to-end sales funnel management with automation features.", rating: 4.7 },
  { id: 27, name: "Boostify CRM", category: "CRM Manager", price: 29, developer: "Boostify Solutions", description: "Customer relationship management with Automated insights.", rating: 4.5 },
  { id: 28, name: "CloudFlex", category: "Cloud Services", price: 95, developer: "FlexCloud", description: "Flexible cloud infrastructure with auto-scaling capabilities.", rating: 4.9 },
  { id: 29, name: "AutoMailer", category: "Marketing", price: 21, developer: "MailerTech", description: "Automated email marketing campaigns with AI personalization.", rating: 4.5 },
  { id: 30, name: "DataTrack", category: "CRM Manager", price: 36, developer: "DataTrack Inc.", description: "Comprehensive CRM with data analytics and reporting features.", rating: 4.6 },
  { id: 32, name: "SocialSpark", category: "Marketing", price: 30, developer: "SparkMedia", description: "Social media marketing automation with AI content suggestions.", rating: 4.7 },
  { id: 33, name: "EngageCRM", category: "CRM Manager", price: 42, developer: "EngageSoft", description: "Customer engagement tracking with Automated insights and recommendations.", rating: 4.9 },
  { id: 35, name: "AdMaster", category: "Marketing", price: 33, developer: "MasterAds", description: "Automated ad campaign management and optimization tools.", rating: 4.8 },
  { id: 36, name: "ClientWise CRM", category: "CRM Manager", price: 37, developer: "WiseClients", description: "Smart CRM with Automated client insights and management features.", rating: 4.5 },
  { id: 37, name: "CloudZenith", category: "Cloud Services", price: 100, developer: "ZenithCloud", description: "High-performance cloud solutions with AI resource allocation.", rating: 4.9 },
  { id: 38, name: "PromoGenie", category: "Marketing", price: 24, developer: "GenieMedia", description: "Automated promotional campaign creation and management.", rating: 4.7 },
  { id: 39, name: "SalesBoost CRM", category: "CRM Manager", price: 44, developer: "BoostSales", description: "Sales-focused CRM with Automated lead scoring and management.", rating: 4.6 },
  { id: 41, name: "AdVantage Max", category: "Marketing", price: 35, developer: "AdVantage Labs", description: "Comprehensive ad management with A/B testing and budget optimization.", rating: 4.7 },
  { id: 42, name: "VirtualAssist CRM", category: "CRM Manager", price: 41, developer: "AssistTech", description: "Automated virtual assistant for CRM tasks and customer interactions.", rating: 4.9 },
  { id: 43, name: "Digital-One", category: "Marketing", price: 27, developer: "Appclick Technology", description: "Digital marketing automation with Automated campaign management.", rating: 4.6 },
  { id: 44, name: "VirtualSecretary", category: "CRM Manager", price: 39, developer: "SecreTech", description: "Automated virtual secretary for scheduling and communication tasks.", rating: 4.5 },
  { id: 45, name: "7thSense Conversion", category: "Marketing", price: 36, developer: "SenseMedia", description: "AI-powered conversion optimization and A/B testing tools.", rating: 4.8 },
  { id: 46, name: "Financial Analytica", category: "Marketing", price: 38, developer: "FinTech Solutions", description: "Automated financial market analysis, analytics, and reporting tools.", rating: 4.8 },
  { id: 47, name: "SmartCRM", category: "CRM Manager", price: 43, developer: "SmartSoft", description: "Intelligent CRM with Automated customer insights and management features.", rating: 4.6 },
  { id: 48, name: "CloudVantage", category: "Cloud Services", price: 94, developer: "VantageCloud", description: "Advanced cloud solutions with Automated resource management and optimization.", rating: 4.9 },
  { id: 49, name: "MarketMaven", category: "Marketing", price: 29, developer: "MavenMedia", description: "Automated market analysis and campaign optimization tools.", rating: 4.7 },
  { id: 50, name: "ClientFocus CRM", category: "CRM Manager", price: 40, developer: "FocusSoft", description: "Customer-focused CRM with Automated insights and management features.", rating: 4.5 },
  { id: 51, name: "ColdEmail Pro", category: "Marketing", price: 23, developer: "EmailTech", description: "Automated cold email outreach and follow-up automation.", rating: 4.6 },
  { id: 52, name: "DealCloser CRM", category: "CRM Manager", price: 46, developer: "CloseTech", description: "Automated deal management and sales tracking features.", rating: 4.8 },
  { id: 54, name: "B2B LeadGen", category: "Marketing", price: 32, developer: "LeadGen Solutions", description: "Automated B2B lead generation and nurturing tools.", rating: 4.5 },
  { id: 55, name: "Customer360 CRM", category: "CRM Manager", price: 47, developer: "360Soft", description: "Comprehensive customer 360-degree view with Automated insights.", rating: 4.9 },
  { id: 56, name: "CloudInnovate", category: "Cloud Services", price: 91, developer: "InnovateCloud", description: "Innovative cloud solutions with Automated performance monitoring.", rating: 4.8 },
];

const categories = ["All", "Marketing", "CRM Manager", "Cloud Services"];
const sortOptions = [
  { value: "name", label: "Name (A–Z)" },
  { value: "price", label: "Price (Low → High)" },
  { value: "rating", label: "Rating (High → Low)" },
  { value: "popular", label: "Popularity" }
];

export default function SaaSProductList({ query = "", mode = "buyer", sellerOnly = false, sellerId = null, recommended = false, sortBy: initialSortBy = "name" }) {
  const [search, setSearch] = useState(String(query || ""));
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState(initialSortBy);
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    setSearch(String(query || ""));
    setPage(1);
  }, [query]);

  useEffect(() => {
    setSortBy(initialSortBy);
  }, [initialSortBy]);

  const filtered = useMemo(() => {
    const q = String(search || "").trim().toLowerCase();
    let data = demoProducts.filter((p) => {
      if (sellerOnly && sellerId && String(p.developer || "").toLowerCase() !== String(sellerId).toLowerCase()) {
        return false;
      }

      if (recommended) {
        // simple demo recommendation: prefer rating >= 4.7 and category match if search contains category
        if (p.rating < 4.6) return false;
      }

      const matchSearch = q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.developer.toLowerCase().includes(q);

      const matchCategory = category === "All" || p.category === category;
      return matchSearch && matchCategory;
    });

    if (sortBy === "name") data.sort((a, b) => a.name.localeCompare(b.name));
    else if (sortBy === "price") data.sort((a, b) => a.price - b.price);
    else if (sortBy === "rating" || sortBy === "popular") data.sort((a, b) => b.rating - a.rating);
    else data.sort((a, b) => a.name.localeCompare(b.name));

    return data;
  }, [search, category, sortBy, sellerOnly, sellerId, recommended]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
    if (page < 1) setPage(1);
  }, [page, totalPages]);

  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="w-full space-y-4">
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
        placeholder="Search SaaS products..."
        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
        aria-label="Search products"
      />

      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setCategory(c);
              setPage(1);
            }}
            className={`px-4 py-2 rounded-xl whitespace-nowrap border ${category === c ? "bg-[#31587c] text-white" : "bg-gray-100 text-gray-700"}`}
            type="button"
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="p-2 border rounded-xl">
          {sortOptions.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
        <div className="text-sm text-gray-600">Showing {filtered.length} result{filtered.length !== 1 ? "s" : ""}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {paginated.length === 0 ? (
          <div className="p-6 bg-white rounded-md shadow text-center col-span-full">No products found.</div>
        ) : (
          paginated.map((p) => (
            <Card key={p.id} className="bg-white rounded-2xl shadow p-4 hover:shadow-lg transition">
              <CardContent>
                <h3 className="font-semibold text-lg text-[#31587c]">{p.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.description}</p>

                <p className="text-sm mt-2 font-medium text-black">Category: {p.category}</p>
                <p className="text-sm font-medium text-gray-700">Developer: {p.developer}</p>

                <p className="text-md font-semibold text-green-600 mt-1">${p.price}/mo</p>

                <p className="text-sm mt-1 font-semibold text-orange-500">⭐ {p.rating}</p>

                <div className="flex gap-2 mt-3">
                  <Button className="bg-[#31587c] text-white px-4 py-2 rounded-xl w-full" onClick={() => alert(`Preview: ${p.name}`)}>
                    Preview
                  </Button>
                  <Button className="bg-teal-500 text-white px-4 py-2 rounded-xl w-full" onClick={() => alert(`Buy: ${p.name} — $${p.price}/mo`)}>
                    Buy
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      <div className="flex items-center gap-3 justify-center mt-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="px-4 py-2 border rounded-xl disabled:opacity-40"
          type="button"
        >
          Prev
        </button>

        <span className="font-semibold">
          Page {page} of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          className="px-4 py-2 border rounded-xl disabled:opacity-40"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
}
