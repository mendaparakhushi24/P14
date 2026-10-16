export default function StudentCard({ student }) {
  const details = [
    ["Email Address", student.email],
    ["Phone Number", student.phone],
    ["Date of Birth", student.dob],
    ["Gender", student.gender],
    ["Course", student.course],
    ["Address", student.address],
  ];

  return (
    <section className="overflow-hidden rounded-2xl border
      border-violet-100 bg-white shadow-xl shadow-violet-100/60">
      <div className="bg-gradient-to-br from-violet-600
        via-indigo-600 to-blue-600 px-6 py-8 text-white">
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center
            justify-center rounded-2xl border border-white/30
            bg-white/15 text-2xl font-bold">
            {student.fullName.charAt(0).toUpperCase()}
          </div>

          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase
              tracking-[0.2em] text-violet-100">
              Registration Successful
            </p>
            <h2 className="mt-2 break-words text-2xl font-bold">
              {student.fullName}
            </h2>
            <p className="mt-1 text-sm text-indigo-100">
              Student ID: STU-{String(student.id).slice(-6)}
            </p>
          </div>
        </div>

        <div className="mt-6 inline-flex rounded-full
          bg-emerald-400/20 px-3 py-1.5 text-sm font-semibold
          text-emerald-50">
          ✓ Successfully Registered
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-4 font-bold text-slate-800">
          Student Information
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {details.map(([label, value]) => (
            <div
              key={label}
              className="min-w-0 rounded-xl bg-slate-50 p-4"
            >
              <p className="text-xs font-semibold uppercase
                tracking-wider text-slate-400">
                {label}
              </p>
              <p className="mt-2 break-words text-sm font-semibold
                text-slate-800">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between
          gap-3 rounded-xl border border-emerald-100
          bg-emerald-50 p-4">
          <div>
            <p className="font-semibold text-emerald-800">
              Registration Date
            </p>
            <p className="mt-1 text-sm text-emerald-700">
              {student.registeredAt}
            </p>
          </div>
          <span className="text-2xl">🎓</span>
        </div>
      </div>
    </section>
  );
}