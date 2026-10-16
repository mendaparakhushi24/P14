import { useState } from "react";
import StudentForm from "./Components/StudentForm";
import StudentCard from "./Components/StudentCard";

export default function App() {
  const [registeredStudent, setRegisteredStudent] = useState(null);

  return (
    <main className="min-h-screen bg-[#F6F5FF] px-4 py-8 sm:px-6 sm:py-12">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <header className="mb-8 flex flex-wrap items-center
          justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center
              justify-center rounded-2xl bg-violet-600
              text-2xl text-white shadow-lg shadow-violet-200">
              🎓
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-slate-900">
                EduRegister
              </h1>
              <p className="text-xs text-slate-500">
                Student Registration Portal
              </p>
            </div>
          </div>

          <span className="rounded-full border border-violet-100
            bg-white px-4 py-2 text-sm font-semibold text-violet-700">
            Academic Year 2026–27
          </span>
        </header>

        {/* Hero */}
        <section className="relative mb-8 overflow-hidden rounded-3xl
          bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-700
          px-6 py-8 text-white sm:px-10 sm:py-10">
          <div className="relative z-10 max-w-2xl">
            <p className="text-sm font-semibold text-violet-200">
              YOUR FUTURE STARTS HERE
            </p>
            <h2 className="mt-3 text-3xl font-extrabold
              leading-tight sm:text-4xl">
              Start your academic journey.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7
              text-indigo-100 sm:text-base">
              Complete the registration form to create your
              student profile. Your submitted information
              will appear below.
            </p>
          </div>

          <div className="absolute -right-8 -top-16 h-56 w-56
            rounded-full border-[30px] border-white/10" />
          <div className="absolute -bottom-24 right-28 h-48 w-48
            rounded-full bg-white/5" />
        </section>

        {/* Form and result */}
        <div className="grid items-start gap-8 lg:grid-cols-5">
          <section className="rounded-3xl border border-slate-100
            bg-white p-6 shadow-xl shadow-violet-100/50 sm:p-8 lg:col-span-3">
            <div className="mb-7">
              <div className="mb-3 flex h-11 w-11 items-center
                justify-center rounded-xl bg-violet-100 text-xl">
                📝
              </div>

              <h2 className="text-2xl font-extrabold text-slate-900">
                Student Registration
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Enter your details in the fields below.
                All fields are required.
              </p>
            </div>

            <StudentForm onRegister={setRegisteredStudent} />
          </section>

          <section className="lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-extrabold text-slate-900">
                Registration Preview
              </h2>
              {registeredStudent && (
                <span className="rounded-full bg-emerald-100
                  px-3 py-1 text-xs font-bold text-emerald-700">
                  Completed
                </span>
              )}
            </div>

            {registeredStudent ? (
              <div className="space-y-4">
                <StudentCard student={registeredStudent} />

                <button
                  onClick={() => setRegisteredStudent(null)}
                  className="w-full rounded-xl border border-violet-200
                    bg-white px-4 py-3 font-semibold text-violet-700
                    transition hover:bg-violet-50"
                >
                  + Register Another Student
                </button>
              </div>
            ) : (
              <div className="flex min-h-80 flex-col items-center
                justify-center rounded-3xl border-2 border-dashed
                border-violet-200 bg-white/70 p-8 text-center">
                <div className="flex h-20 w-20 items-center
                  justify-center rounded-full bg-violet-100 text-4xl">
                  👨‍🎓
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-800">
                  Your profile awaits!
                </h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  Submit the registration form to see your student
                  details displayed here.
                </p>
                <span className="mt-5 rounded-full bg-violet-50
                  px-4 py-2 text-xs font-semibold text-violet-700">
                  Awaiting submission
                </span>
              </div>
            )}
          </section>
        </div>

        <footer className="mt-10 border-t border-violet-100 pt-6
          text-center text-sm text-slate-500">
          © 2026 EduRegister · React + Tailwind CSS
        </footer>
      </div>
    </main>
  );
}