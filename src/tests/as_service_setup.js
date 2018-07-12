import { expect } from 'chai';

import * as asApi from '../api/v2/as';
import { as1EventEmitter } from '../callback_server';
import { createEventPromise, generateReferenceId } from '../utils';
import * as config from '../config';

describe('AS (as1) setup', function() {
  const referenceId = generateReferenceId();

  const addOrUpdateServiceResultPromise = createEventPromise();

  before(function() {
    as1EventEmitter.on('callback', function(callbackData) {
      if (callbackData.type === 'add_or_update_service_result') {
        addOrUpdateServiceResultPromise.resolve(callbackData);
      }
    });
  });

  it('should add offered service (bank_statement) successfully', async function() {
    const response = await asApi.addOrUpdateService('as1', {
      serviceId: 'bank_statement',
      reference_id: referenceId,
      callback_url: config.AS1_CALLBACK_URL,
      min_ial: 1.1,
      min_aal: 1,
      url: config.AS1_CALLBACK_URL,
    });
    expect(response.status).to.equal(202);

    const addOrUpdateServiceResult = await addOrUpdateServiceResultPromise.promise;
    expect(addOrUpdateServiceResult).to.deep.include({
      reference_id: referenceId,
      success: true,
    });
  });
});