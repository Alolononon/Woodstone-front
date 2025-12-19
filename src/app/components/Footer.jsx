export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-blue-50">
            <div className="max-w-7xl mx-auto py-4 px-4 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Woodstone. All rights reserved.</p>

            </div>
        </footer>
    );
}