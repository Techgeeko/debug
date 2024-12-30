export default function CTA() {
    return (
      <section className="relative z-30 mx-auto mb-7 flex w-full max-w-screen-xl flex-col items-start gap-7 p-4 py-10 md:p-10">
        <div className="w-full origin-left rounded-3xl bg-zinc-900 px-5 py-24  text-center">
          <h2 className="mx-auto text-3xl font-bold tracking-tight text-white md:text-4xl">Join hundreds of construction businesses using Quick Quote</h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a className="text-md  hover:white rounded-md bg-gradient-to-tr from-pink-500 to-violet-500 px-3.5  py-2.5 font-semibold text-zinc-50 backdrop-blur-lg duration-700 hover:saturate-150 focus-visible:outline focus-visible:outline-2  focus-visible:outline-offset-2  focus-visible:outline-white" href="/auth/signup">Start your 14-days free trial <span aria-hidden="true">→</span></a></div>
          </div>
        </section>
    )
  }
  
  