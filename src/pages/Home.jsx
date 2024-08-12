import { Spinner } from "../components/Spinner/Spinner"

const Home = () => {
    return (
        <section className="py-[25px]">
            <div className="container">
                <div>
                    <div className="flex flex-col gap-y-10 max-w-[1040px] mx-auto my-[100px] text-center items-center">
                        <h1 className="secondFont font-bold text-[38px] sm:text-[52px]">Yeni biznesə fikrini <span className="text-primary">doğruldaraq</span> başla!</h1>
                        <p className="text-[22px]">Platformamız sahibkarlara biznes ideyalarını paylaşmaq və investorlarla əlaqə qurmaq imkanı verir, eyni zamanda süni intellektin köməyi ilə innovativ ideyalar kəşf edə bilərsiniz.</p>
                        <button className="py-[10px] bg-primary text-white w-[170px] rounded-xl">Başla</button>
                    </div>
                    <div className="flex flex-col items-center">
                        <div>
                            <Spinner />
                        </div>
                        <div>
                            <Spinner />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home