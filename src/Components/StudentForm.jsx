import { useState } from "react";
import FormInput from "./FormInput";

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  gender: "",
  course: "",
  address: "",
};

export default function StudentForm({ onRegister }) {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onRegister({
      ...formData,
      id: Date.now(),
      registeredAt: new Date().toLocaleDateString(),
    });

    setFormData(initialForm);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <FormInput
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        <FormInput
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="student@example.com"
        />

        <FormInput
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
        />

        <FormInput
          label="Date of Birth"
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="gender"
            className="block text-sm font-semibold text-slate-700"
          >
            Gender
          </label>

          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-200
              bg-slate-50 px-4 py-3 text-sm outline-none
              focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
          >
            <option value="">Select gender</option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
            <option value="Other">Other</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
        </div>

        <div className="space-y-2">
          <label
            htmlFor="course"
            className="block text-sm font-semibold text-slate-700"
          >
            Select Course
          </label>

          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-slate-200
              bg-slate-50 px-4 py-3 text-sm outline-none
              focus:border-violet-500 focus:ring-4 focus:ring-violet-100"
          >
            <option value="">Choose a course</option>
            <option value="BCA">BCA</option>
            <option value="BBA">BBA</option>
            <option value="B.Com">B.Com</option>
            <option value="MCA">MCA</option>
            <option value="MBA">MBA</option>
            <option value="B.Sc IT">B.Sc IT</option>
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="address"
          className="block text-sm font-semibold text-slate-700"
        >
          Residential Address
        </label>

        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter your full address"
          required
          rows={3}
          className="w-full resize-y rounded-xl border border-slate-200
            bg-slate-50 px-4 py-3 text-sm outline-none
            placeholder:text-slate-400 focus:border-violet-500
            focus:bg-white focus:ring-4 focus:ring-violet-100"
        />
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        <button
          type="submit"
          className="flex flex-1 items-center justify-center gap-2
            rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600
            px-5 py-3.5 font-bold text-white shadow-lg
            shadow-violet-200 transition hover:-translate-y-0.5
            hover:shadow-xl focus:outline-none focus:ring-4
            focus:ring-violet-200"
        >
          <span>✦</span> Register Student
        </button>

        <button
          type="button"
          onClick={() => setFormData(initialForm)}
          className="rounded-xl border border-slate-200 px-5 py-3.5
            font-semibold text-slate-600 transition hover:bg-slate-100"
        >
          Reset
        </button>
      </div>
    </form>
  );
}