import { PokemonRegion } from '@/types/enum/PokemonRegion';
import { PokedexRange } from '@/types/PokedexRange';

/**
 * 各地方へのリンクのprops型
 *
 * - region PokemonRegion
 * - PokedexRange
 */
export type RegionLinkProps = { region: PokemonRegion } & PokedexRange;
