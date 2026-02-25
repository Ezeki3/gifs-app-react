import { act } from "react";
import { renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGif } from "./useGif";
import * as gifActions from '../actions/get-gifs-by-query.actions';

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

  test('should return a list of gifs from cache', async () => {
    const { result } = renderHook(() => useGif());

    await act(async () => {
      await result.current.handleTermClicked('goku')
    })

    expect(result.current.gifs.length).toBe(10);

    vi.spyOn(gifActions, 'getGifsByQuery').mockRejectedValue(new Error('This is my custom error'));

    await act(async () => {
      await result.current.handleTermClicked('goku')
    });
    expect(result.current.gifs.length).toBe(10);

  });

  test('should return no more than 8 previuos terms', async () => {
    const { result } = renderHook(() => useGif());

    vi.spyOn(gifActions, 'getGifsByQuery').mockResolvedValue([]);

    await act(async () => {
      await result.current.handleSearch('goku1')
    })
    await act(async () => {
      await result.current.handleSearch('goku2')
    });
    await act(async () => {
      await result.current.handleSearch('goku3')
    });
    await act(async () => {
      await result.current.handleSearch('goku4')
    });
    await act(async () => {
      await result.current.handleSearch('goku5')
    });
    await act(async () => {
      await result.current.handleSearch('goku6')
    });
    await act(async () => {
      await result.current.handleSearch('goku7')
    });
    await act(async () => {
      await result.current.handleSearch('goku8')
    });
    await act(async () => {
      await result.current.handleSearch('goku9')
    });

    expect(result.current.previousTerm.length).toBe(8);
    expect(result.current.previousTerm).toStrictEqual(
      [
        'goku9', 'goku8',
        'goku7', 'goku6',
        'goku5', 'goku4',
        'goku3', 'goku2'
      ]
    )

  });

})