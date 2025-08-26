import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { storage } from "./storage/resource";

const backend = defineBackend({
  auth,
  data,
  storage,
});

const { cfnBucket } = backend.storage.resources.cfnResources;
// Use a globally unique name (DNS-style, 3–63 chars)
cfnBucket.bucketName = "ecnamplify-clinical-trails-studies";
