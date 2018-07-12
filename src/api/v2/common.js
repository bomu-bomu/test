import { getApiAddressUrl, httpGet, httpPost } from '../helpers';

export function getRelevantIdpNodesBySid(nodeId, data) {
  const apiBaseUrl = getApiAddressUrl(nodeId) + '/v2';
  const { namespace, identifier } = data;
  return httpGet(`${apiBaseUrl}/utility/idp/${namespace}/${identifier}`);
}
