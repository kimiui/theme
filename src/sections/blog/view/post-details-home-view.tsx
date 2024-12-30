import type { IPostItem } from 'src/types/blog';

import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { RouterLink } from 'routes-react';
import Divider from '@mui/material/Divider';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AvatarGroup from '@mui/material/AvatarGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';
import { Iconify } from 'src/components/iconify';
import { Markdown } from 'src/components/markdown';
import { fShortenNumber } from 'src/utils/format-number';
import { EmptyContent } from 'src/components/empty-content';
import { CustomBreadcrumbs } from 'src/components/custom-breadcrumbs';

import { PostItem } from '../post-item';
import { PostDetailsSkeleton } from '../post-skeleton';
import { PostCommentList } from '../post-comment-list';
import { PostCommentForm } from '../post-comment-form';
import { PostDetailsHero } from '../post-details-hero';

// ----------------------------------------------------------------------

type Props = {
  post?: IPostItem;
  relativePosts?: IPostItem[];
  loading?: boolean;
  error?: any;
};

export function PostDetailsHomeView({ post, relativePosts, loading, error }: Readonly<Props>) {
  if (loading) {
    return <PostDetailsSkeleton />;
  }

  if (error) {
    return (
      <Container sx={{ my: 5 }}>
        <EmptyContent
          filled
          title="Post not found!"
          action={
            <Button
              component={RouterLink as any}
              href={paths.posts.root}
              startIcon={<Iconify width={16} icon="eva:arrow-ios-back-fill" />}
              sx={{ mt: 3 }}
            >
              Back to list
            </Button>
          }
          sx={{ py: 10 }}
        />
      </Container>
    );
  }

  return (
    <>
      <PostDetailsHero
        title={post?.title ?? ''}
        author={post?.author}
        coverUrl={post?.coverUrl ?? ''}
        createdAt={post?.createdAt}
      />
      <Container
        maxWidth={false}
        sx={{
          py: 3,
          mb: 5,
          borderBottom: (theme) => `solid 1px ${theme.vars.palette.divider}`,
        }}
      >
        <CustomBreadcrumbs
          links={[
            { name: 'Home', href: '/' },
            { name: 'Blog', href: paths.posts.root },
            { name: post?.title },
          ]}
          sx={{ maxWidth: 720, mx: 'auto' }}
        />
      </Container>
      <Container maxWidth={false}>
        <Stack sx={{ maxWidth: 720, mx: 'auto' }}>
          <Typography variant="subtitle1">{post?.description}</Typography>

          <Markdown>{post?.content}</Markdown>

          <Stack
            spacing={3}
            sx={{
              py: 3,
              borderTop: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
              borderBottom: (theme) => `dashed 1px ${theme.vars.palette.divider}`,
            }}
          >
            <Stack direction="row" flexWrap="wrap" spacing={1}>
              {post?.tags.map((tag) => <Chip key={tag} label={tag} variant="soft" />)}
            </Stack>

            <Stack direction="row" alignItems="center">
              <FormControlLabel
                control={
                  <Checkbox
                    defaultChecked
                    size="small"
                    color="error"
                    icon={<Iconify icon="solar:heart-bold" />}
                    checkedIcon={<Iconify icon="solar:heart-bold" />}
                    inputProps={{
                      id: 'favorite-checkbox',
                      'aria-label': 'Favorite checkbox',
                    }}
                  />
                }
                label={fShortenNumber(post?.totalFavorites)}
                sx={{ mr: 1 }}
              />

              <AvatarGroup>
                {post?.favoritePerson.map((person) => (
                  <Avatar key={person.name} alt={person.name} src={person.avatarUrl} />
                ))}
              </AvatarGroup>
            </Stack>
          </Stack>

          <Stack direction="row" sx={{ mb: 3, mt: 5 }}>
            <Typography variant="h4">Comments</Typography>

            <Typography variant="subtitle2" sx={{ color: 'text.disabled' }}>
              ({post?.comments.length})
            </Typography>
          </Stack>

          <PostCommentForm />

          <Divider sx={{ mt: 5, mb: 2 }} />

          <PostCommentList comments={post?.comments} />
        </Stack>
      </Container>
      {!!relativePosts?.length && (
        <Container sx={{ pb: 15 }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Relative Posts
          </Typography>

          <Grid container spacing={3}>
            {relativePosts?.slice(relativePosts.length - 4).map((latestPost) => (
              <Grid
                key={latestPost.id}
                size={{
                  xs: 12,
                  sm: 6,
                  md: 4,
                  lg: 3,
                }}
              >
                <PostItem post={latestPost} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
}