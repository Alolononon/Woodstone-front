import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    parentName: "",
    phone: "",
    studentLevel: "",
    lessonType: "",
    subjects: "",
    preferredTime: "",
    message: "",
  });

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Option A: open WhatsApp with filled template (no backend)
    const text =
      `Hi, I would like to enquire about tuition at Woodstone.\n\n` +
      `Parent name: ${form.parentName}\n` +
      `Phone: ${form.phone}\n` +
      `Student level: ${form.studentLevel}\n` +
      `Subjects: ${form.subjects}\n` +
      `Lesson type: ${form.lessonType}\n` +
      `Preferred time: ${form.preferredTime}\n\n` +
      `Message: ${form.message}`;

    const url = `https://wa.me/6590022782?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900">Send an Enquiry</h3>
      <p className="text-sm text-gray-600 mt-1">
        Fill this up and it will open WhatsApp with your details pre-filled.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div>
          <label className="text-sm font-medium text-gray-700">Parent name</label>
          <input
            name="parentName"
            value={form.parentName}
            onChange={update}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="e.g. Mrs Tan"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Phone number</label>
          <input
            name="phone"
            value={form.phone}
            onChange={update}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="e.g. 9123 4567"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Student level</label>
          <select
            name="studentLevel"
            value={form.studentLevel}
            onChange={update}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200"
            required
          >
            <option value="">Select</option>
            <option>P1</option><option>P2</option><option>P3</option><option>P4</option><option>P5</option><option>P6</option>
            <option>Sec 1</option><option>Sec 2</option><option>Sec 3</option><option>Sec 4</option><option>Sec 5</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Lesson type</label>
          <select
            name="lessonType"
            value={form.lessonType}
            onChange={update}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200"
            required
          >
            <option value="">Select</option>
            <option>1-to-1</option>
            <option>Group</option>
            <option>Not sure yet</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Subject(s)</label>
          <input
            name="subjects"
            value={form.subjects}
            onChange={update}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="e.g. Math, English, Science"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Preferred day/time</label>
          <input
            name="preferredTime"
            value={form.preferredTime}
            onChange={update}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="e.g. Tue/Thu 7–9pm"
          />
        </div>

        <div className="md:col-span-2">
          <label className="text-sm font-medium text-gray-700">Additional message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={update}
            rows={4}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Tell us what you need help with, exam date, weak topics, etc."
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-black text-white py-2.5 font-medium hover:opacity-90 transition"
      >
        Enquire via WhatsApp
      </button>

      <p className="text-xs text-gray-500 mt-3">
        By submitting, you agree that Woodstone may contact you via WhatsApp/phone.
      </p>
    </form>
  );
}
