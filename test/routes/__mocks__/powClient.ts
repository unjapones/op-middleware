type MockedClientOptions = {
  ffsId: string
  ffsToken: string
  cid: string
  jobId: string
}

// @TODO: return typing to match Partial<PowClient> from util/pow
export function getMockedClient(options: MockedClientOptions): any {
  const { ffsId, ffsToken, cid, jobId } = options
  const mockedClient: any = {
    ffs: {
      create: () => Promise.resolve({ token: ffsToken, id: ffsId }),
      stage: () => Promise.resolve({ cid }),
      pushStorageConfig: () => Promise.resolve({ jobId }),
      watchJobs: (callback: (job: { status: number }) => void) => {
        // allow to update the job via a function
        mockedClient.updateJob = () => callback({ status: 5 })
        return () => null
      },
      defaultStorageConfig: () => Promise.resolve({}),
      setDefaultStorageConfig: () => Promise.resolve(),
    },
    setToken: () => null,
    updateJob: null,
  }

  return mockedClient
}
