import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, BookOpen, Brain, Zap, Users, Star, Check } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">SAT AI</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <Link 
                href="#features" 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded-md hover:bg-gray-50"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded-md hover:bg-gray-50"
              >
                How it Works
              </Link>
              <Link 
                href="#pricing" 
                className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors px-2 py-1 rounded-md hover:bg-gray-50"
              >
                Pricing
              </Link>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" className="font-medium">
                  Sign In
                </Button>
                <Button size="sm" className="font-medium">
                  Get Started
                </Button>
              </div>
            </nav>
            {/* Mobile menu button - you might want to add a mobile menu later */}
            <div className="md:hidden flex items-center space-x-2">
              <Button variant="outline" size="sm" className="font-medium text-xs">
                Sign In
              </Button>
              <Button size="sm" className="font-medium text-xs">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <Badge variant="secondary" className="px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered SAT Prep
              </Badge>
              <div className="space-y-4 max-w-4xl">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-gray-900">
                  Transform SAT Questions into
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Video Lessons
                  </span>
                </h1>
                <p className="mx-auto max-w-2xl text-xl text-gray-600 leading-relaxed">
                  Generate personalized video explanations for any SAT question in seconds. Help students understand
                  complex concepts with AI-powered visual learning.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="px-8 py-3 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </div>
              <div className="pt-8">
                <div className="relative mx-auto max-w-4xl">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border shadow-2xl overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                          <Play className="w-8 h-8 text-blue-600" />
                        </div>
                        <p className="text-gray-600 font-medium">Product Demo Video</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Why Choose SAT AI?</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Powerful features designed to revolutionize SAT preparation through AI-generated video content.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Instant Video Generation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Convert any SAT question into a comprehensive video explanation in under 30 seconds using advanced
                    AI technology.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">All SAT Subjects</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Support for Math, Reading, Writing, and all SAT question types with subject-specific teaching
                    approaches.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Adaptive Learning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    AI analyzes student performance and generates personalized explanations tailored to individual
                    learning styles.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Classroom Integration</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Seamlessly integrate with existing curricula and share video lessons with students instantly.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <Star className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Performance Analytics</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Track student engagement and comprehension with detailed analytics on video lesson effectiveness.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                    <Check className="w-6 h-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">Quality Assured</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Every generated video is reviewed by our AI quality system to ensure accuracy and educational value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-20">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">How It Works</h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Generate professional SAT lesson videos in three simple steps.
              </p>
            </div>
            <div className="grid gap-12 md:grid-cols-3">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Upload Question</h3>
                <p className="text-gray-600 leading-relaxed">
                  Simply paste or upload any SAT question from practice tests, textbooks, or create your own.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900">AI Processing</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI analyzes the question, identifies key concepts, and creates a structured lesson plan.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Get Video</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive a polished video explanation ready to share with students or use in your classroom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="w-full py-20 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Trusted by Educators Worldwide
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Join thousands of teachers and tutors who are transforming SAT preparation.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "SAT AI has revolutionized how I teach SAT prep. My students finally understand complex math
                    concepts through these visual explanations."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Sarah Johnson</p>
                      <p className="text-sm text-gray-600">SAT Tutor, Boston</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "The time I save creating lesson content is incredible. I can focus on what matters most - helping
                    my students succeed."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Michael Chen</p>
                      <p className="text-sm text-gray-600">High School Teacher</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    "My students' SAT scores improved by an average of 150 points after incorporating these video
                    lessons into our curriculum."
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                    <div>
                      <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                      <p className="text-sm text-gray-600">Learning Center Director</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                  Ready to Transform Your SAT Teaching?
                </h2>
                <p className="mx-auto max-w-2xl text-xl text-blue-100">
                  Join thousands of educators who are already using SAT AI to create engaging, effective lesson content.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="px-8 py-3 text-lg">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-blue-600"
                >
                  Schedule Demo
                </Button>
              </div>
              <p className="text-blue-100 text-sm">No credit card required • 14-day free trial • Cancel anytime</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">SAT AI</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transforming SAT preparation through AI-powered video lesson generation.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Product</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Features
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  API
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Integrations
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Support</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Help Center
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Contact Us
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Status
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Community
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Company</h4>
              <div className="space-y-2 text-sm">
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Blog
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Careers
                </Link>
                <Link href="#" className="block text-gray-600 hover:text-gray-900 transition-colors">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">© 2024 SAT AI. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
