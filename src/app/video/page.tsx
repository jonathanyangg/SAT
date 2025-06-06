"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Play, Upload, Zap, ArrowLeft, Copy, Download } from "lucide-react"
import Link from "next/link"

export default function VideoGenerationPage() {
  const [question, setQuestion] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedVideo, setGeneratedVideo] = useState(false)

  const handleGenerate = async () => {
    if (!question.trim()) return
    
    setIsGenerating(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 3000))
    setIsGenerating(false)
    setGeneratedVideo(true)
  }

  const handleReset = () => {
    setQuestion("")
    setGeneratedVideo(false)
    setIsGenerating(false)
  }

  return (
    <div className="min-h-screen bg-white">
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
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to Home
              </Link>
              <Button variant="outline" size="sm" className="font-medium">
                Sign In
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 lg:px-6 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <Badge variant="secondary" className="px-4 py-2 mb-4">
            <Zap className="w-4 h-4 mr-2" />
            AI Video Generator
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900 mb-4">
            Generate SAT Video Lessons
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Paste any SAT question below and our AI will generate a comprehensive video explanation in seconds.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {!generatedVideo ? (
            // Question Input Form
            <Card className="shadow-lg border-0">
              <CardHeader className="border-b border-gray-100 bg-gray-50/50">
                <div className="flex items-center space-x-2">
                  <Upload className="w-5 h-5 text-blue-600" />
                  <h2 className="text-xl font-semibold text-gray-900">Enter SAT Question</h2>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Copy and paste any SAT question from practice tests, textbooks, or create your own.
                </p>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="question" className="block text-sm font-medium text-gray-900 mb-2">
                      SAT Question
                    </label>
                    <textarea
                      id="question"
                      rows={8}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                      placeholder="Example: If 3x + 7 = 22, what is the value of x?

A) 3
B) 5
C) 7
D) 15

Paste your SAT question here..."
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                    />
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-xs text-gray-500">
                        {question.length} characters
                      </p>
                      {question && (
                        <button
                          onClick={() => setQuestion("")}
                          className="text-xs text-gray-500 hover:text-gray-700 transition-colors"
                        >
                          Clear
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      onClick={handleGenerate}
                      disabled={!question.trim() || isGenerating}
                      size="lg"
                      className="flex-1 px-6 py-3 text-base font-medium"
                    >
                      {isGenerating ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Generating Video...
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5 mr-2" />
                          Generate Video Lesson
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="sm:w-auto px-6 py-3 text-base font-medium"
                      onClick={() => {
                        const sampleQuestion = `If 3x + 7 = 22, what is the value of x?

A) 3
B) 5
C) 7
D) 15

To solve this equation, we need to isolate x by performing inverse operations.`
                        setQuestion(sampleQuestion)
                      }}
                    >
                      Use Sample Question
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            // Generated Video Result
            <div className="space-y-6">
              <Card className="shadow-lg border-0">
                <CardHeader className="border-b border-gray-100 bg-green-50/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <Play className="w-5 h-5 text-green-600" />
                      </div>
                      <h2 className="text-xl font-semibold text-gray-900">Video Generated Successfully!</h2>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      Ready
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {/* Video Player Placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl border shadow-inner overflow-hidden mb-4">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto shadow-lg">
                          <Play className="w-10 h-10 text-blue-600" />
                        </div>
                        <div>
                          <p className="text-gray-900 font-semibold text-lg">SAT Math Video Lesson</p>
                          <p className="text-gray-600">Duration: 2:34</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Video Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button size="lg" className="flex-1 px-6 py-3 text-base font-medium">
                      <Play className="w-5 h-5 mr-2" />
                      Play Video
                    </Button>
                    <Button variant="outline" size="lg" className="px-6 py-3 text-base font-medium">
                      <Download className="w-5 h-5 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" size="lg" className="px-6 py-3 text-base font-medium">
                      <Copy className="w-5 h-5 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Generate Another */}
              <div className="text-center">
                <Button 
                  variant="outline" 
                  onClick={handleReset}
                  className="px-6 py-2 font-medium"
                >
                  Generate Another Video
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Loading State Overlay */}
        {isGenerating && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 flex items-center justify-center">
            <Card className="mx-4 max-w-md w-full shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generating Your Video</h3>
                <p className="text-gray-600 text-sm">
                  Our AI is analyzing your question and creating a personalized video explanation...
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
