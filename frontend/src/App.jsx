
import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";

import api from "./api/axiosConfig";
import { CAREERS } from "./assessmentData";

import {
  ArrowRight,
  BrainCircuit,
  Target,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Eye,
  EyeOff,
  Lock,
  Mail,
  User,
  LogOut,
  Loader2,
  Code,
  BookOpen,
  Database,
} from "lucide-react";

// ==========================================
// MAIN APP
// ==========================================

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/assessment" element={<AssessmentPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

// ==========================================
// NAVBAR
// ==========================================

function Navbar({ showSignIn = true }) {
  const navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-16">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2"
      >
        <BrainCircuit className="text-violet-400" size={32} />
        <span className="text-2xl font-bold">
          Skill<span className="text-violet-400">Bridge</span>
        </span>
      </button>

      {showSignIn && (
        <button
          onClick={() => navigate("/login")}
          className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20"
        >
          Sign In
        </button>
      )}
    </nav>
  );
}

// ==========================================
// HOME PAGE
// ==========================================

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 md:px-16">
        <section className="grid min-h-[75vh] items-center gap-14 py-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-2 text-sm text-violet-300">
              <Sparkles size={16} />
              Your journey to career readiness starts here
            </div>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Discover Your Gaps.
              <span className="block text-violet-400">
                Build Your Future.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-400">
              Identify the skills you need, discover your strengths,
              and follow a personalized learning roadmap to reach
              your dream career.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/register")}
                className="flex items-center gap-2 rounded-xl bg-violet-600 px-7 py-4 font-semibold hover:bg-violet-500"
              >
                Get Started
                <ArrowRight size={19} />
              </button>

              <button
                onClick={() => navigate("/login")}
                className="rounded-xl border border-white/20 px-7 py-4 font-semibold hover:bg-white/10"
              >
                Explore Platform
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={18} />
                Personalized Roadmaps
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 className="text-emerald-400" size={18} />
                Skill Gap Analysis
              </span>
            </div>
          </div>

          <div className="relative grid gap-5 sm:grid-cols-2">
            <FeatureCard
              icon={<Target size={27} />}
              title="Skill Assessment"
              description="Understand your current strengths and identify missing skills."
              color="text-violet-400"
            />

            <FeatureCard
              icon={<TrendingUp size={27} />}
              title="Career Growth"
              description="Measure your readiness for your dream job role."
              color="text-emerald-400"
            />

            <FeatureCard
              icon={<BrainCircuit size={27} />}
              title="Smart Analysis"
              description="Get recommendations based on career skill requirements."
              color="text-blue-400"
            />

            <FeatureCard
              icon={<GraduationCap size={27} />}
              title="Learning Roadmap"
              description="Follow a structured path to develop your skills."
              color="text-orange-400"
            />
          </div>
        </section>

        <footer className="border-t border-white/10 py-7 text-center text-sm text-slate-500">
          © 2026 SkillBridge. Discover your potential. Build your future.
        </footer>
      </main>
    </div>
  );
}

// ==========================================
// FEATURE CARD
// ==========================================

function FeatureCard({ icon, title, description, color }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.08]">
      <div className={`mb-5 ${color}`}>{icon}</div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="text-sm leading-7 text-slate-400">
        {description}
      </p>
    </div>
  );
}

// ==========================================
// AUTH LAYOUT
// ==========================================

function AuthLayout({ children, subtitle }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar showSignIn={false} />

      <div className="flex min-h-[85vh] items-center justify-center px-5 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-400/30 bg-violet-500/10">
              <BrainCircuit size={36} className="text-violet-400" />
            </div>

            <h1 className="text-3xl font-extrabold">
              Welcome to{" "}
              <span className="text-violet-400">SkillBridge</span>
            </h1>

            <p className="mt-3 text-slate-400">{subtitle}</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 shadow-2xl sm:p-9">
            {children}
          </div>

          <p className="mt-8 text-center text-xs text-slate-500">
            © 2026 SkillBridge. Discover your potential.
          </p>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// INPUT FIELD
// ==========================================

function FormInput({
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  icon,
  showToggle = false,
}) {
  const [visible, setVisible] = useState(false);

  const inputType = showToggle
    ? visible ? "text" : "password"
    : type;

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
          {icon}
        </span>

        <input
          type={inputType}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required
          className="w-full rounded-xl border border-white/10 bg-slate-900 py-3.5 pl-12 pr-12 text-white outline-none placeholder:text-slate-600 focus:border-violet-500"
        />

        {showToggle && (
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
          >
            {visible ? <EyeOff size={19} /> : <Eye size={19} />}
          </button>
        )}
      </div>
    </div>
  );
}

// ==========================================
// ERROR MESSAGE
// ==========================================

function ErrorMessage({ message }) {
  return (
    <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
      {message}
    </div>
  );
}

// ==========================================
// LOGIN PAGE
// ==========================================

function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem(
        "skillbridge_token",
        response.data.token
      );

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Login failed. Please check your email and password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout subtitle="Sign in to continue your career journey.">
      <form onSubmit={handleLogin} className="space-y-5">
        {error && <ErrorMessage message={error} />}

        <FormInput
          label="Email Address"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="you@example.com"
          icon={<Mail size={19} />}
        />

        <FormInput
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="Enter your password"
          icon={<Lock size={19} />}
          showToggle
        />

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-4 font-semibold hover:bg-violet-500 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 size={19} className="animate-spin" />
              Signing In...
            </>
          ) : (
            <>
              Sign In
              <ArrowRight size={19} />
            </>
          )}
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-slate-400">
        Don't have an account?{" "}
        <button
          onClick={() => navigate("/register")}
          className="font-semibold text-violet-400"
        >
          Create Account
        </button>
      </p>
    </AuthLayout>
  );
}

// ==========================================
// REGISTER PAGE
// ==========================================


function RegisterPage() {
  const navigate = useNavigate();

  const careerGoals = Object.keys(CAREERS);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [careerGoal, setCareerGoal] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!careerGoal) {
      setError("Please select your preferred career path.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    setLoading(true);

    try {
      await api.post("/auth/register", {
        fullName,
        email,
        password,
        careerGoal,
      });

      navigate("/login", {
        state: { registered: true, email },
      });

    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout subtitle="Create your account and start building your future.">
      <form onSubmit={handleRegister} className="space-y-5">
        {error && <ErrorMessage message={error} />}

        <FormInput
          label="Full Name"
          value={fullName}
          onChange={setFullName}
          placeholder="Enter your full name"
          icon={<User size={19} />}
        />

        <FormInput
          label="Email Address"
          type="email"
          value={email}
          onChange={setEmail}
          placeholder="you@example.com"
          icon={<Mail size={19} />}
        />

        <FormInput
          label="Password"
          value={password}
          onChange={setPassword}
          placeholder="Minimum 8 characters"
          icon={<Lock size={19} />}
          showToggle
        />

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Choose Your Career Goal
          </label>

          <select
            value={careerGoal}
            onChange={(e) => setCareerGoal(e.target.value)}
            required
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3.5 text-white outline-none focus:border-violet-500"
          >
            <option value="" disabled>
              Select your preferred career
            </option>

            {careerGoals.map((career) => (
              <option key={career} value={career}>
                {career}
              </option>
            ))}
          </select>

          <p className="mt-2 text-xs text-slate-500">
            Your selection will determine your initial career assessment.
          </p>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-4 font-semibold hover:bg-violet-500 disabled:opacity-60"
        >
          {loading ? (
            <>
              <Loader2 size={19} className="animate-spin" />
              Creating Account...
            </>
          ) : (
            <>
              Create Account
              <ArrowRight size={19} />
            </>
          )}
        </button>
      </form>

      <p className="mt-7 text-center text-sm text-slate-400">
        Already have an account?{" "}
        <button
          onClick={() => navigate("/login")}
          className="font-semibold text-violet-400"
        >
          Sign In
        </button>
      </p>
    </AuthLayout>
  );
}


// ==========================================
// ASSESSMENT PAGE
// ==========================================


function AssessmentPage() {
  const navigate = useNavigate();

  const careerGoals = Object.keys(CAREERS);

  const [careerGoal, setCareerGoal] = useState("");
  const [answers, setAnswers] = useState({});
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [profileLoading, setProfileLoading] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const loadCareerPreference = async () => {
      try {
        const response = await api.get("/user/profile");
        const savedCareer = response.data.careerGoal;

        if (savedCareer && CAREERS[savedCareer]) {
          setCareerGoal(savedCareer);
        } else {
          setCareerGoal(careerGoals[0]);
        }
      } catch (err) {
        setError("Could not load your career preference. Please log in again.");
      } finally {
        setProfileLoading(false);
      }
    };

    loadCareerPreference();
  }, []);

  const questions = CAREERS[careerGoal] || [];
  const current = questions[index];
  const answered = Object.keys(answers).length;

  const chooseCareer = (goal) => {
    setCareerGoal(goal);
    setAnswers({});
    setIndex(0);
    setError("");
    setSuccess(false);
  };

  const submit = async () => {
    setError("");

    if (answered !== questions.length) {
      setError("Please answer all questions before submitting.");
      return;
    }

    const skills = questions.map((q, i) => {
      const correct = answers[i] === q.answer;

      return {
        name: q.skill,
        level: correct ? "Advanced" : "Beginner",
        score: correct ? 1 : 0,
      };
    });

    setLoading(true);

    try {
      await api.post("/assessments", {
        careerGoal,
        skills: JSON.stringify(skills),
      });

      setSuccess(true);

      setTimeout(() => {
        navigate("/dashboard", { replace: true });
      }, 700);

    } catch (e) {
      setError(
        e.response?.data?.message ||
        "Could not submit exam. Please log in again and retry."
      );
    } finally {
      setLoading(false);
    }
  };

  if (profileLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-violet-400">
        <Loader2 className="animate-spin" size={36} />
      </div>
    );
  }

  if (!careerGoal || !current) {
    return (
      <div className="min-h-screen bg-slate-950 p-10 text-white">
        {error || "Unable to load your career assessment."}
        <button
          onClick={() => navigate("/dashboard")}
          className="ml-3 text-violet-300 underline"
        >
          Back to dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar showSignIn={false} />

      <main className="mx-auto max-w-5xl px-6 py-10">
        <button
          onClick={() => navigate("/dashboard")}
          className="mb-6 text-sm text-violet-300"
        >
          ← Back to dashboard
        </button>

        <h1 className="text-4xl font-extrabold">
          Career <span className="text-violet-400">Assessment Exam</span>
        </h1>

        <p className="mt-3 text-slate-400">
          Answer six role-specific questions. Your answers are evaluated
          automatically and saved to your profile.
        </p>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <label className="mb-2 block font-semibold">
            Your Career Path
          </label>

          <select
            value={careerGoal}
            onChange={(e) => chooseCareer(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-slate-900 p-3 text-white"
          >
            {careerGoals.map((goal) => (
              <option key={goal} value={goal}>
                {goal}
              </option>
            ))}
          </select>

          <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
            <span>Question {index + 1} of {questions.length}</span>
            <span>{answered}/{questions.length} answered</span>
          </div>

          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
            <div
              className="h-full bg-violet-500 transition-all"
              style={{
                width: `${answered / questions.length * 100}%`,
              }}
            />
          </div>

          <div className="mt-8">
            <p className="text-xs font-bold uppercase tracking-wider text-violet-300">
              {current.skill}
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {current.q}
            </h2>

            <div className="mt-6 grid gap-3">
              {current.options.map((option, i) => (
                <button
                  key={option}
                  onClick={() => setAnswers((a) => ({
                    ...a,
                    [index]: i,
                  }))}
                  className={`rounded-xl border p-4 text-left transition ${
                    answers[index] === i
                      ? "border-violet-400 bg-violet-500/20 text-violet-200"
                      : "border-white/10 bg-slate-900 hover:border-violet-400/50"
                  }`}
                >
                  <span className="mr-3 text-violet-300">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-between gap-3">
            <button
              disabled={index === 0}
              onClick={() => setIndex((i) => i - 1)}
              className="rounded-xl border border-white/15 px-5 py-3 disabled:opacity-30"
            >
              Previous
            </button>

            {index < questions.length - 1 ? (
              <button
                onClick={() => setIndex((i) => i + 1)}
                className="rounded-xl bg-violet-600 px-6 py-3 font-semibold"
              >
                Next question →
              </button>
            ) : (
              <button
                onClick={submit}
                disabled={loading || success}
                className="rounded-xl bg-emerald-600 px-6 py-3 font-semibold disabled:opacity-50"
              >
                {loading ? "Evaluating..." : "Submit exam"}
              </button>
            )}
          </div>

          {error && (
            <p className="mt-5 rounded-xl bg-red-500/10 p-4 text-red-300">
              {error}
            </p>
          )}

          {success && (
            <p className="mt-5 rounded-xl bg-emerald-500/10 p-4 text-emerald-300">
              Exam submitted! Updating your dashboard...
            </p>
          )}
        </section>

        <p className="mt-4 text-xs text-slate-500">
          Scoring: correct answers indicate stronger proficiency;
          incorrect answers identify skills to improve. This is a
          foundational screening quiz, not a professional certification.
        </p>
      </main>
    </div>
  );
}


// ==========================================
// DASHBOARD PAGE
// ==========================================

function DashboardPage() {
  const navigate = useNavigate();
  const [user,setUser]=useState(null); const [analysis,setAnalysis]=useState(null); const [roadmap,setRoadmap]=useState([]);
  const [loading,setLoading]=useState(true); const [error,setError]=useState(""); const [done,setDone]=useState({});
  const token=localStorage.getItem("skillbridge_token");
  const progressKey=`skillbridge_progress_${user?.id || user?.email || "current"}`;
  useEffect(()=>{ if(!token){navigate("/login",{replace:true});return;}
    api.get("/user/profile").then(r=>setUser(r.data)).catch(e=>{if(e.response?.status===401||e.response?.status===403){localStorage.removeItem("skillbridge_token");navigate("/login",{replace:true});}else setError("Could not load your profile.");}).finally(()=>setLoading(false));
    api.get("/assessments/analysis").then(r=>setAnalysis(r.data)).catch(e=>{if(e.response?.status!==404)setError(e.response?.data?.message||"No assessment found yet. Take your first exam.");});
    api.get("/assessments/roadmap").then(r=>setRoadmap(Array.isArray(r.data)?r.data:[])).catch(()=>setRoadmap([]));
  },[navigate,token]);
  useEffect(()=>{try{setDone(JSON.parse(localStorage.getItem(progressKey)||"{}"));}catch{setDone({});}},[progressKey]);
  const toggleDone=(week)=>setDone(prev=>{const next={...prev,[week]:!prev[week]};localStorage.setItem(progressKey,JSON.stringify(next));return next;});
  const logout=()=>{localStorage.removeItem("skillbridge_token");navigate("/login");};
  if(loading)return <div className="flex min-h-screen items-center justify-center bg-slate-950 text-violet-400"><Loader2 className="animate-spin" size={36}/></div>;
  if(!user)return <div className="min-h-screen bg-slate-950 p-10 text-white">{error||"Unable to load profile."}<button onClick={()=>navigate("/login")} className="ml-3 underline">Login</button></div>;
  const completed=roadmap.filter(x=>done[x.week]).length;
  const SkillList=({title,skills,color})=><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><h3 className={`mb-4 text-lg font-bold ${color}`}>{title} ({skills?.length||0})</h3>{!skills?.length?<p className="text-sm text-slate-500">None identified.</p>:<div className="flex flex-wrap gap-2">{skills.map(x=><span key={x} className="rounded-lg bg-white/5 px-3 py-2 text-sm text-slate-300">{x}</span>)}</div>}</div>;
  return <div className="min-h-screen bg-slate-950 text-white"><nav className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-16"><div className="flex items-center gap-2"><BrainCircuit className="text-violet-400" size={32}/><span className="text-2xl font-bold">Skill<span className="text-violet-400">Bridge</span></span></div><button onClick={logout} className="flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm hover:bg-red-500/20"><LogOut size={18}/>Logout</button></nav>
  <main className="mx-auto max-w-7xl px-6 py-12 md:px-16"><div className="rounded-3xl border border-violet-400/20 bg-gradient-to-br from-violet-600/20 to-slate-900 p-8 md:p-12"><p className="mb-3 text-sm text-violet-300">Your career journey</p><h1 className="text-4xl font-extrabold">Welcome, <span className="text-violet-400">{user.fullName}</span>!</h1><p className="mt-3 text-slate-400">{user.email}</p><button onClick={()=>navigate("/assessment")} className="mt-7 rounded-xl bg-violet-600 px-6 py-3 font-semibold hover:bg-violet-500">{analysis?"Retake Career Exam":"Take Career Exam"}</button></div>
  {!analysis?<div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-7"><h2 className="text-2xl font-bold">Start with your career assessment</h2><p className="mt-2 text-slate-400">Take a short role-specific MCQ exam to generate your skill analysis and roadmap.</p><button onClick={()=>navigate("/assessment")} className="mt-5 rounded-xl bg-violet-600 px-5 py-3 font-semibold">Start exam →</button>{error&&<p className="mt-3 text-amber-300">{error}</p>}</div>:<><h2 className="mt-12 text-2xl font-bold">Your Skill Gap Analysis</h2><div className="mt-6 grid gap-5 md:grid-cols-2"><div className="rounded-2xl border border-violet-400/20 bg-violet-500/10 p-7"><p className="text-sm text-slate-400">Career Goal</p><h3 className="mt-2 text-2xl font-bold text-violet-300">{analysis.careerGoal}</h3></div><div className="rounded-2xl border border-white/10 bg-white/[0.04] p-7"><p className="text-sm text-slate-400">Career Readiness</p><h3 className="mt-2 text-4xl font-extrabold text-emerald-400">{analysis.readinessScore}%</h3><div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-800"><div className="h-full rounded-full bg-emerald-400" style={{width:`${analysis.readinessScore}%`}}/></div></div></div><div className="mt-6 grid gap-5 md:grid-cols-3"><SkillList title="Strong Skills" skills={analysis.strongSkills} color="text-emerald-400"/><SkillList title="Needs Improvement" skills={analysis.weakSkills} color="text-amber-300"/><SkillList title="Missing Skills" skills={analysis.missingSkills} color="text-rose-400"/></div></>}
  <section className="mt-12"><div className="flex flex-wrap items-end justify-between gap-3"><div><h2 className="text-2xl font-bold"><GraduationCap className="mr-2 inline text-violet-400"/>Personalized Learning Roadmap</h2><p className="mt-2 text-slate-400">Learning resources, practical projects and weekly progress.</p></div>{roadmap.length>0&&<p className="text-sm text-violet-300">{completed}/{roadmap.length} weeks completed</p>}</div>
  {roadmap.length===0?<p className="mt-6 rounded-xl border border-white/10 p-6 text-slate-400">Complete an exam to generate your roadmap.</p>:<div className="mt-6 space-y-4">{roadmap.map(step=><article key={step.week} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div className="flex gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 font-bold text-violet-300">{step.week}</div><div><p className="text-xs font-bold uppercase tracking-wider text-violet-400">Week {step.week}</p><h3 className="mt-1 text-xl font-bold">{step.skill}</h3><p className="mt-2 text-sm text-slate-300">Project: {step.project}</p></div></div><label className="flex cursor-pointer items-center gap-2 text-sm text-slate-300"><input type="checkbox" checked={Boolean(done[step.week])} onChange={()=>toggleDone(step.week)} className="h-4 w-4 accent-violet-500"/>Completed</label></div><div className="mt-5 flex flex-wrap gap-3 text-sm">{step.resourceUrl&&<a href={step.resourceUrl} target="_blank" rel="noreferrer" className="text-violet-300 underline">Learning resource ↗</a>}{step.projectUrl&&<a href={step.projectUrl} target="_blank" rel="noreferrer" className="text-violet-300 underline">Project guide ↗</a>}</div></article>)}</div>}</section>
  </main></div>;
}

export default App;