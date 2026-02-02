

export default function SignUpMoreDiscounts() {
    return (
        <section className="w-full bg-neutral-100 py-16 text-black">
            <div className="mx-auto max-w-4xl px-6 text-center">
                <h1 className="mb-6 text-2xl md:text-4xl font-semibold leading-tight">
                    Sign Up with more than 1 subject? Get Additional Discounts!
                </h1>
                <p className="mb-6 text-lg">
                    Enjoy extra savings when you enroll in multiple subjects with Woodstone Tuition. 
                    Our multi-subject discount is designed to help you achieve academic excellence across the board.
                </p>
                <ul className="mb-8 space-y-2 text-left text-lg max-w-md mx-auto">
                    <li>• 2 Subjects: Additional 5% off total tuition fees</li>
                    <li>• 3 Subjects: Additional 10% off total tuition fees</li>
                    <li>• Siblings: Additional 10% off total tuition fees </li>
                </ul>
                <a
                    href="/signup"
                    className="inline-block rounded-xl bg-green-400 px-6 py-3 text-base font-medium text-black transition hover:bg-green-300"
                >
                    Sign Up Now →
                </a>  
            </div>
        </section>
    );
}