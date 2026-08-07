export default function Home() {
    return (
        <div className="min-h-100vh flex flex-col items-center">
            <div className="flex justify-between mt-10 w-3/4">
                <div className="text-2xl font-bold">Become the software engineer that companies love to hire</div>
                <img
                    src="/course.jpeg"
                    alt="Course Image"
                    className="rounded shadow-lg"
                    style={{ width: '300px', height: '200px' }}
                />
            </div>
        </div>
    );
}
