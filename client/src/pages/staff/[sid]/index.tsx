import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWRMutation from 'swr/mutation';
import Head from 'next/head';
import { Box, Container, Fab, Grid, TextField } from '@mui/material';
import LoadingOverlay from '@/components/LoadingOverlay';
import { pagesPath } from '@/utils/$path';
import { Save } from '@mui/icons-material';
import {
  NewStaff,
  StaffForClient,
  StaffControllerApi,
} from '@/openapi/openapi-generated';
import { format } from 'date-fns';

const fetcher = async (url: string, { arg }: { arg: NewStaff }) =>
  await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ staff: arg }),
  });

export const getServerSideProps: GetServerSideProps<
  { staff: StaffForClient },
  { sid: string }
> = async (context) => {
  if (context.params === undefined) throw new Error('Invalid parameters');
  const { sid } = context.params;
  const api = new StaffControllerApi();
  const response = await api.show(sid);
  const staff = response.data;
  return { props: { staff } };
};

export default function Index({
  staff,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [staffUnderEdit, setStaffUnderEdit] = useState<StaffForClient>(staff);

  const router = useRouter();
  const { trigger, isMutating } = useSWRMutation(
    `http://localhost:8080/api/staffs/${staff.id}/`,
    fetcher,
  );
  console.log(staff);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Container>
          <Box
            sx={(_theme) => ({
              maxWidth: '105ch',
              width: '100%',
            })}
          >
            {isMutating && <LoadingOverlay />}
            <Grid
              container
              spacing={2}
              style={{
                height: '100%',
                width: '100%',
                marginTop: 40,
              }}
            >
              <Grid item xs={12}>
                エラーメッセージ
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="姓"
                  value={staffUnderEdit.lastName}
                  onChange={(e) =>
                    setStaffUnderEdit({
                      ...staffUnderEdit,
                      lastName: e.target.value,
                    })
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="名"
                  value={staffUnderEdit.firstName}
                  onChange={(e) =>
                    setStaffUnderEdit({
                      ...staffUnderEdit,
                      firstName: e.target.value,
                    })
                  }
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="生年月日"
                  type="date"
                  value={format(staffUnderEdit.birthDate, 'yyyy-MM-dd')}
                  onChange={(e) => {
                    setStaffUnderEdit({
                      ...staffUnderEdit,
                      birthDate: e.target.value,
                    });
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="email"
                  type="email"
                  value={staffUnderEdit.email}
                  onChange={(e) => {
                    setStaffUnderEdit({
                      ...staffUnderEdit,
                      email: e.target.value,
                    });
                  }}
                />
              </Grid>
            </Grid>
            <Fab
              variant="extended"
              color="primary"
              style={{ left: '50%', bottom: '2%', position: 'fixed' }}
              disabled={isMutating}
              onClick={async () => {
                await trigger(staffUnderEdit);
                await router.push(pagesPath.staff.$url());
              }}
            >
              <Save />
              保存
            </Fab>
          </Box>
        </Container>
      </main>
    </>
  );
}
