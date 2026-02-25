import { renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useGif } from "./useGif";
import { act } from "react";

describe('useGifs', () => {

  test('should return default values and methods', () => {
    const { result } = renderHook(() => useGif());

    expect(result.current.gifs.length).toBe(0);
    expect(result.current.previousTerm.length).toBe(0);
    expect(result.current.handleTermClicked).toBeDefined();
  });

  test('should return a list of gifs', async () => {
    const { result } = renderHook(() => useGif());

    await act(async () => {
      await result.current.handleSearch('goku')
    })

    expect(result.current.gifs.length).toBe(10);
  });

  test('should return a list of gifs when handleTermClicked is called', async () => {
    const { result } = renderHook(() => useGif());

    await act(async () => {
      await result.current.handleTermClicked('goku')
    })

    expect(result.current.gifs.length).toBe(10);
  });


})