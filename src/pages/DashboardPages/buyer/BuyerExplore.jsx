// /pages/buyer/Explore.jsx
import Layout from "../../components/Layout";
import SaaSProductList from "../../components/SaaSProductList";

export default function Explore() {
  return (
    <Layout title="Explore SaaS Marketplace">
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-[#31587c]">
          Explore SaaS Products
        </h1>

        <SaaSProductList />
      </div>
    </Layout>
  );
}
