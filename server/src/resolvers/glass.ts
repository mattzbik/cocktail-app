import { Arg, Field, Int, ObjectType, Query, Resolver } from 'type-graphql';
import { postgresDataSource } from '../data-source';
import { Glass } from '../entities/Glass';

@ObjectType()
class PaginatedGlass {
  @Field(() => [Glass])
  glass: Glass[];
  @Field()
  hasMore: boolean;
}

@Resolver(Glass)
export class GlassResolver {
  @Query(() => PaginatedGlass)
  async glasses(
    @Arg('limit', () => Int) limit: number,
    @Arg('cursor', () => String, { nullable: true }) cursor: string | null
  ): Promise<PaginatedGlass> {
    const realLimit = Math.min(50, limit);
    const realLimitPlusOne = Math.min(50, limit) + 1;

    const replacements: (number | Date)[] = [realLimitPlusOne];

    if (cursor) {
      replacements.push(new Date(parseInt(cursor)));
    }

    const glass = await postgresDataSource.query(
      `
        select g.*
        from glass g
        ${cursor ? 'where g."createdAt" < $2' : ''}
        order by g."createdAt" DESC
        limit $1
      `,
      replacements
    );

    return {
      glass: glass.slice(0, realLimit),
      hasMore: glass.length === realLimitPlusOne,
    };
  }

  @Query(() => Glass, { nullable: true })
  glass(@Arg('id') id: string): Promise<Glass | null> {
    return Glass.findOne({ where: { id } });
  }
}
