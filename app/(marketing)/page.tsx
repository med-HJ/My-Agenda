import { Button } from "@/components/ui/button";
import { Medal } from "lucide-react";
import Link from "next/link";

const ManagementPage = () => {
    return (
        <div className="flex items-center justify-center flex-col"> 
            <div className="flex items-center justify-center flex-col">
                <div className="mb-4 flex items-center border shadow-sm p-4 bg-amber-100 text-amber-700 rounded-full uppercase">
                    <Medal className="h-6 w-6 mr-2"/>
                    No 1 task Management
                </div>
                <h1 className="text-3xl md:text-6xl text-center text-neutral-800 mb-6 "> 
                My Agenda is your custom management tool to help you
                </h1>
                <div className="text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
                    work forward and achieve your goals.
                </div>
            </div>
            <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-w-2xl text-center mx-auto ">
            Unlock Seamless Organization and Streamlined Collaboration: Revolutionize Your Team's Workflow with our Innovative Agenda Management Platform. From task delegation to project tracking, empower every member to achieve their best, together.
            </div>
            <Button className="mt-6" size="lg" asChild>
                <Link href="sign-up">
                    Get Started
                </Link>
            </Button>
        </div>
    )
}

export default ManagementPage;