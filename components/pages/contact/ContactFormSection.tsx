"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { DictProps } from "@/types/constants";

type Status = "idle" | "loading" | "success" | "error";

const FIELD_ICONS = {
  name: User,
  email: Mail,
  phone: Phone,
  subject: FileText,
  message: MessageSquare,
};

const ContactFormSection = ({ dict, locale }: DictProps) => {
  const isRtl = locale === "ar";
  const data = dict.contact_page.form;
  const [status, setStatus] = useState<Status>("idle");
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async () => {
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
  };

  const textFields = [
    { key: "name", type: "text" },
    { key: "email", type: "email" },
    { key: "phone", type: "tel" },
    { key: "subject", type: "text" },
  ];

  return (
    <div className="relative bg-white rounded-3xl border border-[#e8e8f0] shadow-[0_8px_48px_rgba(0,0,0,0.06)] overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-1 bg-linear-to-r from-[#d53336] via-[#f2555a] to-[#c9a84c]" />
      <div className="p-8 md:p-10">
        <div className={`mb-8 ${isRtl ? "text-right" : ""}`}>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1a1a2e] mb-2">
            {data.title}
          </h2>
          <p className="text-[#4a4a6a] font-medium">{data.description}</p>
        </div>

        <AnimatePresence mode="wait">
          {status === "success" ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center py-12 text-center gap-4"
            >
              <div className="w-20 h-20 rounded-full bg-green-50 border-2 border-green-200 flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-extrabold text-[#1a1a2e]">
                {data.success_title}
              </h3>
              <p className="text-[#4a4a6a] font-medium max-w-xs">
                {data.success_message}
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  setValues({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                  });
                }}
                className="mt-2 text-sm text-[#d53336] font-bold hover:underline"
              >
                {isRtl ? "إرسال رسالة أخرى" : "Send Another Message"}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {textFields.map(({ key, type }) => {
                  const Icon = FIELD_ICONS[key as keyof typeof FIELD_ICONS];
                  const fieldData =
                    data.fields[key as keyof typeof data.fields];
                  const isFocused = focused === key;
                  const hasValue = !!values[key as keyof typeof values];
                  return (
                    <div key={key}>
                      <label
                        className={`block text-sm font-bold text-[#1a1a2e] mb-2 ${isRtl ? "text-right" : ""}`}
                      >
                        {fieldData.label}
                      </label>
                      <div className="relative">
                        <div
                          className={`absolute top-1/2 -translate-y-1/2 transition-colors duration-200 ${isRtl ? "right-4" : "left-4"} ${isFocused || hasValue ? "text-[#d53336]" : "text-[#9090a8]"}`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <input
                          type={type}
                          value={values[key as keyof typeof values]}
                          onChange={(e) =>
                            setValues((p) => ({ ...p, [key]: e.target.value }))
                          }
                          onFocus={() => setFocused(key)}
                          onBlur={() => setFocused(null)}
                          placeholder={fieldData.placeholder}
                          dir={isRtl ? "rtl" : "ltr"}
                          className={`w-full rounded-2xl border-2 bg-[#f7f7fb] py-3.5 text-[#1a1a2e] font-medium text-sm placeholder:text-[#b0b0c8] outline-none transition-all duration-200 ${isRtl ? "pr-11 pl-4 text-right" : "pl-11 pr-4"} ${isFocused ? "border-[#d53336] bg-white shadow-[0_0_0_4px_rgba(213,51,54,0.08)]" : "border-[#e8e8f0] hover:border-[#d53336]/40"}`}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div>
                <label
                  className={`block text-sm font-bold text-[#1a1a2e] mb-2 ${isRtl ? "text-right" : ""}`}
                >
                  {data.fields.message.label}
                </label>
                <div className="relative">
                  <div
                    className={`absolute top-4 transition-colors duration-200 ${isRtl ? "right-4" : "left-4"} ${focused === "message" || values.message ? "text-[#d53336]" : "text-[#9090a8]"}`}
                  >
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <textarea
                    rows={5}
                    value={values.message}
                    onChange={(e) =>
                      setValues((p) => ({ ...p, message: e.target.value }))
                    }
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder={data.fields.message.placeholder}
                    dir={isRtl ? "rtl" : "ltr"}
                    className={`w-full rounded-2xl border-2 bg-[#f7f7fb] py-3.5 text-[#1a1a2e] font-medium text-sm resize-none placeholder:text-[#b0b0c8] outline-none transition-all duration-200 ${isRtl ? "pr-11 pl-4 text-right" : "pl-11 pr-4"} ${focused === "message" ? "border-[#d53336] bg-white shadow-[0_0_0_4px_rgba(213,51,54,0.08)]" : "border-[#e8e8f0] hover:border-[#d53336]/40"}`}
                  />
                </div>
              </div>

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-2 text-red-500 text-sm font-medium ${isRtl ? "flex-row-reverse" : ""}`}
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{data.error_message}</span>
                </motion.div>
              )}

              <motion.button
                onClick={handleSubmit}
                disabled={status === "loading"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-3 py-4 px-8 rounded-2xl font-bold text-base text-white bg-[#d53336] hover:bg-[#b01f22] disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_24px_rgba(213,51,54,0.35)] hover:shadow-[0_6px_36px_rgba(213,51,54,0.50)] transition-all duration-300 ${isRtl ? "flex-row-reverse" : ""}`}
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className={`w-5 h-5 ${isRtl ? "rotate-180" : ""}`} />
                )}
                <span>
                  {status === "loading" ? data.submitting : data.submit}
                </span>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactFormSection;
