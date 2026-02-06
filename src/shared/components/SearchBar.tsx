
interface SearchBarProps {
  placeholder?: string
}

export default function SearchBar({ placeholder = 'Buscar' }: SearchBarProps) {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder={placeholder} />
        <button>Buscar</button>
      </div>
    </>
  )
}
