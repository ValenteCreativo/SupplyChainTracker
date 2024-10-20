'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Wallet, User, Star, ThumbsUp, MessageSquare, Search, Filter } from 'lucide-react'

// Types
type Idea = {
  id: number
  title: string
  author: string
  content: string
  likes: number
  comments: number
  authorReputation: number
  tags: string[]
}

type ReputationBadgeProps = {
  score: number
}

type IdeaCardProps = Idea

type ForumLayoutProps = {
  children: React.ReactNode
}

// Header Component
const Header: React.FC = () => (
  <header className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center p-4 bg-white bg-opacity-70 backdrop-blur-lg shadow-md w-full">
  <Link href="/" passHref>
    <Image
      src="https://coral-near-warbler-359.mypinata.cloud/ipfs/QmXjeU4gEnrSZ5Bd4Yn9oTbCMRxPYCbQX5sZeHeJUba5mN"
      alt="Logo"
      width={100}
      height={50}
      className="cursor-pointer"
    />
  </Link>

  {/* Título centrado */}
  <h1 className="text-3xl font-bold text-center text-[#4A3F35] absolute left-1/2 transform -translate-x-1/2">
    Collaborative Forum
  </h1>

  <div className="flex items-center space-x-4">
    <Link href="/Home" passHref>
      <button className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity">
        Home
      </button>
    </Link>
  </div>
</header>
)

// ReputationBadge Component
const ReputationBadge: React.FC<ReputationBadgeProps> = ({ score }) => (
  <div className="flex items-center bg-[#F6F1EB] rounded-full px-3 py-1">
    <Star className="w-4 h-4 text-[#D6BA8A] mr-1" />
    <span className="text-sm font-semibold text-[#4A3F35]">{score}</span>
  </div>
)

// WalletConnect Component
const WalletConnect: React.FC = () => (
  <button className="flex items-center bg-[#4A3F35] text-white px-4 py-2 rounded-full hover:bg-opacity-90 transition-opacity">
    <Wallet className="w-4 h-4 mr-2" />
    Connect Wallet
  </button>
)

// IdeaCard Component
const IdeaCard: React.FC<IdeaCardProps> = ({ title, author, content, likes, comments, authorReputation, tags }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-xl font-semibold text-[#4A3F35]">{title}</h3>
      <ReputationBadge score={authorReputation} />
    </div>
    <p className="text-gray-600 mb-4">{content}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag, index) => (
        <span key={index} className="bg-[#F6F1EB] text-[#4A3F35] px-2 py-1 rounded-full text-sm">
          {tag}
        </span>
      ))}
    </div>
    <div className="flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <button className="flex items-center text-gray-500 hover:text-[#D6BA8A]">
          <ThumbsUp className="w-4 h-4 mr-1" />
          <span>{likes}</span>
        </button>
        <button className="flex items-center text-gray-500 hover:text-[#D6BA8A]">
          <MessageSquare className="w-4 h-4 mr-1" />
          <span>{comments}</span>
        </button>
      </div>
      <div className="flex items-center">
        <User className="w-4 h-4 mr-2 text-gray-500" />
        <span className="text-sm text-gray-500">{author}</span>
      </div>
    </div>
  </div>
)

// NewIdeaForm Component
const NewIdeaForm: React.FC = () => {
  const [tags, setTags] = useState<string[]>([])
  const [newTag, setNewTag] = useState('')

  const handleAddTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag('')
    }
  }

  return (
    <form className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h3 className="text-xl font-semibold text-[#4A3F35] mb-4">Propose a New Idea</h3>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Describe your idea..."
        className="w-full p-2 mb-4 border border-gray-300 rounded h-32"
      ></textarea>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          className="flex-grow p-2 border border-gray-300 rounded-l"
        />
        <button
          type="button"
          onClick={handleAddTag}
          className="bg-[#D6BA8A] text-white px-4 py-2 rounded-r"
        >
          Add Tag
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="bg-[#F6F1EB] text-[#4A3F35] px-2 py-1 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-[#D6BA8A] to-[#C2A676] text-white px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
      >
        Submit Idea
      </button>
    </form>
  )
}

const SearchBar: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSearch} className="flex mb-6">
      <input
        type="text"
        placeholder="Search ideas..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="flex-grow p-2 border border-gray-300 rounded-l"
      />
      <button
        type="submit"
        className="bg-[#D6BA8A] text-white px-4 py-2 rounded-r flex items-center"
      >
        <Search className="w-4 h-4 mr-2" />
        Search
      </button>
    </form>
  )
}


const IdeaList: React.FC = () => {
  const [ideas, setIdeas] = useState<Idea[]>([
    {
      id: 1,
      title: "Blockchain-based Donation Tracking",
      author: "crypto_enthusiast",
      content: "Implement a blockchain solution to track donations and ensure transparency in fund allocation for NGOs.",
      likes: 24,
      comments: 7,
      authorReputation: 89,
      tags: ["blockchain", "transparency", "NGO"]
    },
    {
      id: 2,
      title: "AI-Powered Impact Assessment",
      author: "data_scientist",
      content: "Develop an AI system to analyze and predict the long-term impact of Effective Altruism initiatives.",
      likes: 31,
      comments: 12,
      authorReputation: 95,
      tags: ["AI", "impact assessment", "effective altruism"]
    },

  ])

  const [filteredIdeas, setFilteredIdeas] = useState<Idea[]>(ideas)

  const handleSearch = (query: string) => {
    const lowercaseQuery = query.toLowerCase()
    const filtered = ideas.filter(idea =>
      idea.title.toLowerCase().includes(lowercaseQuery) ||
      idea.content.toLowerCase().includes(lowercaseQuery) ||
      idea.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
    setFilteredIdeas(filtered)
  }

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {filteredIdeas.map((idea) => (
        <IdeaCard key={idea.id} {...idea} />
      ))}
    </div>
  )
}


const ForumLayout: React.FC<ForumLayoutProps> = ({ children }) => (
  <div className="max-w-4xl mx-auto mt-24 p-6">
    <h1 className="text-3xl font-bold text-center text-[#4A3F35] mb-8">Collaborative Forum</h1>
    <div className="flex justify-between items-center mb-6">
      <WalletConnect />
      <ReputationBadge score={75} /> {/* User's overall reputation */}
    </div>
    {children}
  </div>
)


const Footer: React.FC = () => (
  <footer className="bg-[#4A3F35] text-white py-8 mt-16 w-full flex-shrink-0">
    <div className="container mx-auto text-center">
      <p>From México with 🩵. Open source available at: <a href="https://github.com/ValenteCreativo/SupplyChainTracker" className="underline hover:text-[#D6BA8A]">Github</a></p>
    </div>
  </footer>
)


export default function CollaborativeForum() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-[#F6F1EB] to-[#E8E2D9] flex flex-col justify-between">
      <Header />
      <ForumLayout>
        <NewIdeaForm />
        <IdeaList />
      </ForumLayout>
      <Footer />
    </div>
  )
}