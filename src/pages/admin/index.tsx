import AdminProducts from "@/app/data/AdminProducts";
import Layout from "@/components/layout";

export default function AdminPage(){
    return(
        <Layout>
        
        <div className="container mx-auto grid-cols-3 grid gap-16">
        <AdminProducts/>
        </div>
        </Layout>
    )
}