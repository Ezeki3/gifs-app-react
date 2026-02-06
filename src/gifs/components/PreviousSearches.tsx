import type { FC } from "react"

interface PreviousSearchesProps {
  searches: string[];

  onLabelClicked: (term: string) => void;
}

export const PreviousSearches: FC<PreviousSearchesProps> = ({ searches, onLabelClicked }) => {
  return (
    <>
      <div className="previous-searches">
        <h2>Búsquedas previas</h2>
        <ul className="previous-searches-list">
          {searches.map((term) => (
            <li
              onClick={() => onLabelClicked(term)}
              key={term}
            >{term}</li>
          ))}
        </ul>
      </div>
    </>
  )
}
