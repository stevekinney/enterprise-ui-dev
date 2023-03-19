The little examples that we have are easy to grok, but they don't always properly demonstrate what you might see in the wild. (This is mostly because it can take days or weeks to fully grok a large code base, so I'm chosing to simplify things a bit.)

I'm not going to bore you with the details of the application that I work on, but we have these things called **Workflows**, which have an **Event History**, that is made up from **Events**. I grabbed one of those raw events. For your viewing pleasure, here it is:

```json
{
  "id": "5",
  "name": "Marker: Version",
  "events": {},
  "eventIds": {},
  "initialEvent": {
    "eventId": "5",
    "eventTime": "2022-07-01T20:28:48.820951669Z",
    "eventType": "MarkerRecorded",
    "version": "0",
    "taskId": "29887307",
    "markerRecordedEventAttributes": {
      "markerName": "Version",
      "details": {
        "change-id": {
          "payloads": [
            {
              "metadata": {
                "encoding": "anNvbi9wbGFpbg=="
              },
              "data": "ImluaXRpYWwgdmVyc2lvbiI="
            }
          ]
        },
        "version": {
          "payloads": [
            {
              "metadata": {
                "encoding": "anNvbi9wbGFpbg=="
              },
              "data": "Mw=="
            }
          ]
        }
      },
      "workflowTaskCompletedEventId": "4",
      "header": null,
      "failure": null
    },
    "attributes": {
      "type": "markerRecordedEventAttributes",
      "markerName": "Version",
      "details": {
        "change-id": {
          "payloads": [
            {
              "metadata": {
                "encoding": "anNvbi9wbGFpbg=="
              },
              "data": "ImluaXRpYWwgdmVyc2lvbiI="
            }
          ]
        },
        "version": {
          "payloads": [
            {
              "metadata": {
                "encoding": "anNvbi9wbGFpbg=="
              },
              "data": "Mw=="
            }
          ]
        }
      },
      "workflowTaskCompletedEventId": "4",
      "header": null,
      "failure": null
    },
    "category": "marker",
    "id": "5",
    "name": "MarkerRecorded",
    "timestamp": "2022-07-01 UTC 20:28:48.82"
  },
  "timestamp": "2022-07-01 UTC 20:28:48.82",
  "category": "marker",
  "eventTime": "2022-07-01T20:28:48.820951669Z",
  "attributes": {
    "type": "markerRecordedEventAttributes",
    "markerName": "Version",
    "details": {
      "change-id": {
        "payloads": [
          {
            "metadata": {
              "encoding": "anNvbi9wbGFpbg=="
            },
            "data": "ImluaXRpYWwgdmVyc2lvbiI="
          }
        ]
      },
      "version": {
        "payloads": [
          {
            "metadata": {
              "encoding": "anNvbi9wbGFpbg=="
            },
            "data": "Mw=="
          }
        ]
      }
    },
    "workflowTaskCompletedEventId": "4",
    "header": null,
    "failure": null
  },
  "eventList": [
    {
      "eventId": "5",
      "eventTime": "2022-07-01T20:28:48.820951669Z",
      "eventType": "MarkerRecorded",
      "version": "0",
      "taskId": "29887307",
      "markerRecordedEventAttributes": {
        "markerName": "Version",
        "details": {
          "change-id": {
            "payloads": [
              {
                "metadata": {
                  "encoding": "anNvbi9wbGFpbg=="
                },
                "data": "ImluaXRpYWwgdmVyc2lvbiI="
              }
            ]
          },
          "version": {
            "payloads": [
              {
                "metadata": {
                  "encoding": "anNvbi9wbGFpbg=="
                },
                "data": "Mw=="
              }
            ]
          }
        },
        "workflowTaskCompletedEventId": "4",
        "header": null,
        "failure": null
      },
      "attributes": {
        "type": "markerRecordedEventAttributes",
        "markerName": "Version",
        "details": {
          "change-id": {
            "payloads": [
              {
                "metadata": {
                  "encoding": "anNvbi9wbGFpbg=="
                },
                "data": "ImluaXRpYWwgdmVyc2lvbiI="
              }
            ]
          },
          "version": {
            "payloads": [
              {
                "metadata": {
                  "encoding": "anNvbi9wbGFpbg=="
                },
                "data": "Mw=="
              }
            ]
          }
        },
        "workflowTaskCompletedEventId": "4",
        "header": null,
        "failure": null
      },
      "category": "marker",
      "id": "5",
      "name": "MarkerRecorded",
      "timestamp": "2022-07-01 UTC 20:28:48.82"
    }
  ],
  "lastEvent": {
    "eventId": "5",
    "eventTime": "2022-07-01T20:28:48.820951669Z",
    "eventType": "MarkerRecorded",
    "version": "0",
    "taskId": "29887307",
    "markerRecordedEventAttributes": {
      "markerName": "Version",
      "details": {
        "change-id": {
          "payloads": [
            {
              "metadata": {
                "encoding": "anNvbi9wbGFpbg=="
              },
              "data": "ImluaXRpYWwgdmVyc2lvbiI="
            }
          ]
        },
        "version": {
          "payloads": [
            {
              "metadata": {
                "encoding": "anNvbi9wbGFpbg=="
              },
              "data": "Mw=="
            }
          ]
        }
      },
      "workflowTaskCompletedEventId": "4",
      "header": null,
      "failure": null
    },
    "attributes": {
      "type": "markerRecordedEventAttributes",
      "markerName": "Version",
      "details": {
        "change-id": {
          "payloads": [
            {
              "metadata": {
                "encoding": "anNvbi9wbGFpbg=="
              },
              "data": "ImluaXRpYWwgdmVyc2lvbiI="
            }
          ]
        },
        "version": {
          "payloads": [
            {
              "metadata": {
                "encoding": "anNvbi9wbGFpbg=="
              },
              "data": "Mw=="
            }
          ]
        }
      },
      "workflowTaskCompletedEventId": "4",
      "header": null,
      "failure": null
    },
    "category": "marker",
    "id": "5",
    "name": "MarkerRecorded",
    "timestamp": "2022-07-01 UTC 20:28:48.82"
  },
  "isFailureOrTimedOut": false,
  "isCanceled": false,
  "isTerminated": false
}
```

Honestly, I don't expect you to grok it. I just want you to recognize that it's big. In our application, we take that raw data and we massage it into a slightly more managable data structure, but it's still pretty gnarly.

[Asymmetric Matchers](Asymmetric%20Matchers.md) allow me to make some lightweight assumptions that will keep my tests honed in on exactly what they should be testing. If another part of the data structure is changes, it doesn't really matter to me.
